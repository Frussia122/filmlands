using films_server.Data;
using Microsoft.AspNetCore.Mvc;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<MovieDb>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("EmployeeDBConnection"));
});

builder.Services.AddScoped<IMovieRepository, MovieRepository>();
var app = builder.Build();

List<Series> Series = new List<Series>();

if(app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    using var scope = app.Services.CreateScope();
    var db = scope.ServiceProvider.GetRequiredService<MovieDb>();
    db.Database.EnsureCreated();
}



app.MapGet("/movies", async (IMovieRepository repository) =>
     Results.Ok(await repository.GetMoviesAsync()))
    .Produces<List<Movie>>(StatusCodes.Status200OK)
    .WithName("GetAllMovies")
    .WithTags("Getters");

app.MapGet("/movies/{id}", async (int id, IMovieRepository repository) =>
    await repository.GetMovieAsync(id) 
    is Movie movie 
    ? Results.Ok(movie) 
    : Results.NotFound())
    .Produces<Movie>(StatusCodes.Status200OK)
    .WithName("GetMovie")
    .WithTags("Getters");

app.MapPost("/movies", async ([FromBody] Movie movie, IMovieRepository repository) =>
{
    await repository.InsertMovieAsync(movie);
    await repository.SaveAsync();
    return Results.Created($"/movies/{movie.Id}", movie);
})
    .Accepts<Movie>("application/json")
    .Produces<Movie>(StatusCodes.Status201Created)
    .WithName("CreateMovie")
    .WithTags("Creators");

app.MapPut("/movies",async ([FromBody] Movie movie, [FromServices] IMovieRepository repository) =>
{
    await repository.UpdateMovieAsync(movie);
    await repository.SaveAsync();
    return Results.NoContent();
})
    .Accepts<Movie>("application/json")
    .WithName("UpdateMovie")
    .WithTags("Updaters");
app.MapDelete("/movies/{id}",async (int id,IMovieRepository repository) =>
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
app.MapGet("/movies/search/title/{query}",
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
app.Run();



