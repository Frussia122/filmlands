using films_server.Data.MovieModel;
using films_server.Data;

 
public class Movie 
{
    public int Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public string ReleaseDate { get; set; } = string.Empty;

    public string Duration { get; set; }

    public string Trailer { get; set; }
    public string Raiting { get; set; }
    public string Director { get; set; }
    public string Country { get; set; }
    public string AgeLimit { get; set; }

    public MovieGenre Genres;
   public Poster Posters;
   public Description Descriptions;
    public virtual ICollection<Actor> Actors { get; set; }
}
