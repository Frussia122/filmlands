var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var Movies = new List<Movie>();
var Series = new List<Series>();

app.MapGet("/movies", () => Movies);
app.MapGet("/movies/{id}", (int id) => Movies.FirstOrDefault(h => h.Id == id));
app.MapPost("/movies",(Movie movie) => Movies.Add(movie));
app.MapPut("/movies", (Movie movie) =>
{
    var index = Movies.FindIndex(h =>  h.Id == movie.Id);
    if(index < 0)
    {
        throw new Exception("Not Found");
    }
});
app.MapDelete("movies/{id}",(int id) =>
{
    var index = Movies.FindIndex(h => h.Id == id);
    if (index < 0)
    {
        throw new Exception("Not Found");
    }
    Movies.RemoveAt(index);
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
app.Run();


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
