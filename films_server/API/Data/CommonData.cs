

namespace films_server.Data
{
    public class CommonData
    {
       
        public int? Id { get; set; }

        public string? Title { get; set; } = string.Empty;
       
        public string? Description { get; set; } = string.Empty;
       
        public string? ReleaseDate { get; set; } = string.Empty;
        
        public int? Duration { get; set; }
     
        public string? Poster { get; set; } = string.Empty;
    }
}
