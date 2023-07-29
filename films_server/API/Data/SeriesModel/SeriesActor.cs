using System.ComponentModel.DataAnnotations.Schema;

namespace films_server.Data.SeriesModel
{
    public class SeriesActor
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Picture { get; set; }
        public string BirthDate { get; set; }
        public string BirthPlace { get; set; }
        public string Description { get; set; }
        public int SeriesId { get; set; }
    }
}
