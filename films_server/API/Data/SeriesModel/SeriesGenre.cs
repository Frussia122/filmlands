using System.ComponentModel.DataAnnotations.Schema;

namespace films_server.Data.SeriesModel
{
    public class SeriesGenre
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Description { get; set; }
        public int SeriesId { get; set; }
    }
}
