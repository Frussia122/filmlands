using Azure.Identity;
using films_server.Auth;
using films_server.Data;
using Microsoft.AspNetCore.Mvc;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();


builder.Services.AddDbContext<MovieDb>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("EmployeeDBConnection"));
});

builder.Services.AddSingleton<ITokenService>(new TokenService());
builder.Services.AddSingleton<IUserRepository>(new UserRepository());
builder.Services.AddAuthorization();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddJwtBearer(options =>
        {
            options.Events = new JwtBearerEvents
            {
                OnMessageReceived = context =>
                {
                    var token = context.Request.Query["api-key"];
                    context.Token = token;
                    return Task.CompletedTask;
                }
            };
            options.TokenValidationParameters = new()
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                ValidIssuer = builder.Configuration["Jwt:Issuer"],
                ValidAudience = builder.Configuration["Jwt:Audience"],
                IssuerSigningKey = new SymmetricSecurityKey
                (
                    Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
            };
        });



builder.Services.AddScoped<IMovieRepository, MovieRepository>();
var app = builder.Build();

app.UseAuthentication();
app.UseAuthorization();


List<Series> Series = new List<Series>();

if(app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    using var scope = app.Services.CreateScope();
    var db = scope.ServiceProvider.GetRequiredService<MovieDb>();
    db.Database.EnsureCreated();
}

app.MapGet("/login", [AllowAnonymous] async (HttpContext context,
    ITokenService tokenService, IUserRepository userRepository) =>
{
    UserModel userModel= new()
    {
       UserName = context.Request.Query["username"],
       Password = context.Request.Query["password"]
    };
    var userDto = userRepository.GetUser(userModel);
    if (userDto == null) return Results.Unauthorized();

    var token = tokenService.buildToken(builder.Configuration["Jwt:Key"],
        builder.Configuration["Jwt:Issuer"], userDto);

    return Results.Ok(token);
});

app.MapGet("/movies", [Authorize] async (IMovieRepository repository) =>
     Results.Ok(await repository.GetMoviesAsync()))
    .Produces<List<Movie>>(StatusCodes.Status200OK)
    .WithName("GetAllMovies")
    .WithTags("Getters");

app.MapGet("/movies/{id}",[Authorize] async (int id, IMovieRepository repository) =>
    await repository.GetMovieAsync(id) 
    is Movie movie 
    ? Results.Ok(movie) 
    : Results.NotFound())
    .Produces<Movie>(StatusCodes.Status200OK)
    .WithName("GetMovie")
    .WithTags("Getters");

app.MapPost("/movies", [Authorize] async ([FromBody] Movie movie, IMovieRepository repository) =>
{
    await repository.InsertMovieAsync(movie);
    await repository.SaveAsync();
    return Results.Created($"/movies/{movie.Id}", movie);
})
    .Accepts<Movie>("application/json")
    .Produces<Movie>(StatusCodes.Status201Created)
    .WithName("CreateMovie")
    .WithTags("Creators");

app.MapPut("/movies", [Authorize] async ([FromBody] Movie movie, [FromServices] IMovieRepository repository) =>
{
    await repository.UpdateMovieAsync(movie);
    await repository.SaveAsync();
    return Results.NoContent();
})
    .Accepts<Movie>("application/json")
    .WithName("UpdateMovie")
    .WithTags("Updaters");

app.MapDelete("/movies/{id}", [Authorize] async (int id,IMovieRepository repository) =>
{   
    await repository.DeleteMovieAsync(id);
    await repository.SaveAsync();
    return Results.NoContent();
})
    .WithName("DeleteMovie")
    .WithTags("Deleters");

app.MapGet("/series", () => Series);
app.MapGet("/series/{id}", (int id) => Series.FirstOrDefault(h => h.Id == id));
app.MapPost("/series", (Series series) => Series.Add(series));
app.MapPut("/series", (Series series) =>
{
    var index = Series.FindIndex(h => h.Id == series.Id);
    if (index < 0)
    {
        throw new Exception("Not Found");
    }
});
app.MapDelete("series/{id}", (int id) =>
{
    var index = Series.FindIndex(h => h.Id == id);
    if (index < 0)
    {
        throw new Exception("Not Found");
    }
    Series.RemoveAt(index);
});

app.MapGet("/movies/search/title/{query}", [Authorize]
async (string query, IMovieRepository repository) =>
            await repository.GetMoviesAsync(query) is
            IEnumerable<Movie> movies
        ? Results.Ok(movies)
        : Results.NotFound(Array.Empty<Movie>()))
    .Produces<List<Movie>>(StatusCodes.Status200OK)
    .Produces(StatusCodes.Status404NotFound)
    .WithName("SearchMovie")
    .WithTags("Getters")
    .ExcludeFromDescription();

app.UseHttpsRedirection();

app.UseCors(options =>
{
    options.AllowAnyOrigin();
    options.AllowAnyMethod();
    options.AllowAnyHeader();
});
app.Run();



