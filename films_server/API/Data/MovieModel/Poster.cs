using System.ComponentModel.DataAnnotations.Schema;

namespace films_server.Data.MovieModel
{
    public class Poster
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string SmallPoster { get; set; }
        public string BigPoster { get; set; }
        public int MovieId { get; set; }
        
    }
}
