using Azure.Identity;
using films_server.Apis;
using films_server.Auth;
using films_server.Data;
using Microsoft.AspNetCore.Mvc;


var builder = WebApplication.CreateBuilder(args);
RegisterServices(builder.Services);
builder.Services.AddCors();
List<Series> Series = new List<Series>();

var app = builder.Build();

Configure(app);

var apis = app.Services.GetServices<IApi>();

foreach(var api in apis)
{
    if (api is null) throw new InvalidProgramException("Api not found");
    api.Register(app);
}




app.UseCors(options =>
{
    options.AllowAnyOrigin();
    options.AllowAnyMethod();
    options.AllowAnyHeader();
});

app.Run(); //Запуск приложения

void RegisterServices(IServiceCollection services)
{
    services.AddEndpointsApiExplorer();

    services.AddSwaggerGen();

    services.AddDbContext<MovieDb>(options =>
    {
        options.UseSqlServer(builder.Configuration.GetConnectionString("EmployeeDBConnection"));
    });
    services.AddScoped<IMovieRepository, MovieRepository>();
    services.AddSingleton<ITokenService>(new TokenService());
    services.AddSingleton<IUserRepository>(new UserRepository());
    services.AddAuthorization();

    services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
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
    services.AddTransient<IApi, AuthApi>();
    services.AddTransient<IApi, MovieApi>();


}

void Configure(WebApplication app)
{
    app.UseAuthentication();
    app.UseAuthorization();

    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
        using var scope = app.Services.CreateScope();
        var db = scope.ServiceProvider.GetRequiredService<MovieDb>();
        db.Database.EnsureCreated();
    }

    app.UseHttpsRedirection();

}



