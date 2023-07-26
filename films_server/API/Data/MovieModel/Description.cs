using System.ComponentModel.DataAnnotations.Schema;

namespace films_server.Data.MovieModel
{
    public class Description
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string SmallDescription { get; set; }
        public string BigDescription { get; set; }
        public int MovieId { get; set; }

        
    }
}
