namespace films_server.Data
{
    public interface IMovieRepository : IDisposable
    {
        Task<List<Movie>> GetMoviesAsync(HttpContext httpContext);
    
        Task<Movie> GetMovieAsync(int movieId);
        Task InsertMovieAsync(Movie movie);

        Task UpdateMovieAsync(Movie movie);
        Task DeleteMovieAsync(int movieId);
        Task SaveAsync();

    }
}
