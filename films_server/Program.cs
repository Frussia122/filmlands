using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<MovieDb>(options =>
{

    options.UseSqlServer(builder.Configuration.GetConnectionString("EmployeeDBConnection"));
});

var app = builder.Build();

List<Series> Series = new List<Series>();



app.MapGet("/movies", async (MovieDb db) => await db.Movies.ToListAsync());

app.MapGet("/movies/{id}", async (int id, MovieDb db) =>
await db.Movies.FirstOrDefaultAsync(h => h.Id == id) 
is Movie movie 
? Results.Ok(movie) 
: Results.NotFound());

app.MapPost("/movies", async ([FromBody] Movie movie,  MovieDb db) =>
{
    db.Movies.Add(movie);
    await db.SaveChangesAsync();
    return Results.Created($"/movies/{movie.Id}", movie);
});
app.MapPut("/movies",async ([FromBody]Movie movie, [FromServices] MovieDb db) =>
{
    var movieFromDb = await db.Movies.FindAsync(new object[] {movie.Id});
    if(movieFromDb == null) return Results.NotFound();
    movieFromDb.Title = movie.Title;
    movieFromDb.Description = movie.Description;
    movieFromDb.ReleaseDate = movie.ReleaseDate;
    await db.SaveChangesAsync();
    return Results.NoContent();

});
app.MapDelete("movies/{id}",async (int id,MovieDb db) =>
{
    var movieFromDb = await db.Movies.FindAsync(new object[] {id});
    if (movieFromDb == null) return Results.NotFound();
    db.Movies.Remove(movieFromDb);
    await db.SaveChangesAsync();
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

public class MovieDb : DbContext
{
    public MovieDb(DbContextOptions<MovieDb> options) : base(options) { }
    public DbSet<Movie> Movies => Set<Movie>();
}

public class Movie
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string ReleaseDate { get; set; }
}

public class Season : Movie
{
    public int SeasonNumber { get; set; }
    public List<Movie> Episodes { get; set; }

}


public class Series: Movie
{
    public int  SeasonsCount { get; set; }
    public List<Season> Seasons { get; set; }
}
