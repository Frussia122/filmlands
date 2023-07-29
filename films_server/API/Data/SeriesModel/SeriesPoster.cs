using System.ComponentModel.DataAnnotations.Schema;

namespace films_server.Data.SeriesModel
{
    public class SeriesPoster
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string SmallPoster { get; set; }
        public string BigPoster { get; set; }
        public int SeriesId { get; set; }

    }
}
