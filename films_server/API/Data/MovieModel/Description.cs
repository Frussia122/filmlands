namespace films_server.Data.MovieModel
{
    public class Description
    {
        public int Id { get; set; }
        public string SmallDescription { get; set; }
        public string BigDescription { get; set; }
        public int MovieId { get; set; }
    }
}
