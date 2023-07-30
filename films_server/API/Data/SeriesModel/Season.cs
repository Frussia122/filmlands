using System.ComponentModel.DataAnnotations.Schema;

namespace films_server.Data.SeriesModel
{
    public class Season
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Title { get; set; }
        public string ReleaseDate { get; set; }
        public string Description { get; set; }
        public string Trailer { get; set; }
        public string Raiting { get; set; }
        public string Director { get; set; }
        public string Country { get; set; }
        public string AgeLimit { get; set; }
        public int SeriesId { get; set; }
        public virtual SeasonPoster SeasonPosters { get; set; } 
        public virtual ICollection<Episode> Episodes { get; set; }
    }
}
