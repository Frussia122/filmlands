using System.ComponentModel.DataAnnotations.Schema;

namespace films_server.Data.SeriesModel
{
    public class Episode
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Preview { get; set; }
        public int SeasonId { get; set; }
    }
}
