using System.ComponentModel.DataAnnotations.Schema;

namespace films_server.Data.MovieModel
{
    public class MovieGenre
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Description { get; set; }
        public int MovieId { get; set; }

        
    }
}
