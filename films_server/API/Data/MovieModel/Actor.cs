using System.ComponentModel.DataAnnotations.Schema;

namespace films_server.Data.MovieModel
{
    public class Actor
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Picture { get; set; }
        public string BirthDate { get; set; }
        public string BirthPlace { get; set; }
        public string Description { get; set; }
        public int MovieId { get; set; }

        

    }
}
