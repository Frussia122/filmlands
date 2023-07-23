using films_server.Data.MovieModel;
using films_server.Data;
using System.ComponentModel.DataAnnotations.Schema;

public class Movie
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string ReleaseDate { get; set; }
    public string Duration { get; set; }
    public string Trailer { get; set; }
    public string Raiting { get; set; } // Corrected typo in property name
    public string Director { get; set; }
    public string Country { get; set; }
    public string AgeLimit { get; set; }

    // Navigation property representing the related MovieGenre for this movie
    public virtual MovieGenre MovieGenre { get; set; }

    // Navigation property representing the related Poster for this movie
    public virtual Poster Poster { get; set; }

    // Navigation property representing the related Description for this movie
    public virtual Description Descriptions { get; set; }

    // Collection navigation property representing the related Actors for this movie
    public virtual ICollection<Actor> Actors { get; set; }
}

