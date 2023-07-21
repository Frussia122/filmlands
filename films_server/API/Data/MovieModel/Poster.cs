namespace films_server.Data.MovieModel
{
    public class Poster
    {
        public int Id { get; set; }
        public string SmallPoster { get; set; }
        public string BigPoster { get; set; }
        public int MovieId { get; set; }
    }
}
