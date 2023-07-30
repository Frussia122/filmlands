using films_server.Data.MovieModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace films_server.Data.SeriesModel
{
    public class Series
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Title { get; set; }
        public string ReleaseDate { get; set; }
        public string Duration { get; set; }
        public string Description { get; set; }
        public string Trailer { get; set; }
        public string Raiting { get; set; } 
        public string Director { get; set; }
        public string Country { get; set; }
        public string AgeLimit { get; set; }
        public virtual ICollection<Season> Seasons { get; set; }
        public virtual ICollection<SeriesActor> SeriesActors { get; set; }
        public virtual SeriesPoster SeriesPosters { get; set; }
        public virtual SeriesGenre SeriesGenres { get; set; }
    }
}
