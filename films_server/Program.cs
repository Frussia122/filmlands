using films_server.Data;
using Microsoft.AspNetCore.Mvc;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<MovieDb>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("EmployeeDBConnection"));
});

builder.Services.AddScoped<IMovieRepository, MovieRepository>();
var app = builder.Build();

List<Series> Series = new List<Series>();



app.MapGet("/movies", async (IMovieRepository repository) =>
     Results.Ok(await repository.GetMoviesAsync()));

app.MapGet("/movies/{id}", async (int id, IMovieRepository repository) =>
await repository.GetMovieAsync(id) 
is Movie movie 
? Results.Ok(movie) 
: Results.NotFound());

app.MapPost("/movies", async ([FromBody] Movie movie, IMovieRepository repository) =>
{
    await repository.InsertMovieAsync(movie);
    await repository.SaveAsync();
    return Results.Created($"/movies/{movie.Id}", movie);
});
app.MapPut("/movies",async ([FromBody] Movie movie, [FromServices] IMovieRepository repository) =>
{
    await repository.UpdateMovieAsync(movie);
    await repository.SaveAsync();
    return Results.NoContent();

});
app.MapDelete("/movies/{id}",async (int id,IMovieRepository repository) =>
{   
    await repository.DeleteMovieAsync(id);
    await repository.SaveAsync();
    return Results.NoContent();
});

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

app.UseHttpsRedirection();
app.Run();



