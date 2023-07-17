using System.Runtime.CompilerServices;


using Newtonsoft.Json;

namespace films_server.Data
{
    public class MovieRepository : IMovieRepository
    {
        private readonly MovieDb _context;
        public MovieRepository(MovieDb context)
        {
            _context = context;
        }
        public  Task<List<Movie>> GetMoviesAsync() =>  _context.Movies.ToListAsync();

        public Task<List<Movie>> GetMoviesAsync(string title) =>
            _context.Movies.Where(h => h.Title.Contains(title)).ToListAsync();

        public async Task<Movie> GetMovieAsync(int movieId) =>
            await _context.Movies.FindAsync(new object[]{movieId});
        

        public async Task InsertMovieAsync(Movie movie) => await _context.Movies.AddAsync(movie);
        

        public async Task UpdateMovieAsync(Movie movie)
        {
            if (movie.Id == null) return; 
            var movieFromDb = await _context.Movies.FindAsync(new object[]{movie.Id});
            if (movieFromDb == null) return;
            movieFromDb.Title = movie.Title;
            movieFromDb.Description = movie.Description;
            movieFromDb.ReleaseDate = movie.ReleaseDate;
            movieFromDb.Duration = movie.Duration;
            movieFromDb.Poster = movie.Poster;
            movieFromDb.Genre = movie.Genre;
            movieFromDb.Trailer = movie.Trailer;
        }

        public async Task  DeleteMovieAsync(int movieId)
        {
            var movieFromDb = await _context.Movies.FindAsync(new object[] { movieId });
            if (movieFromDb == null) return;
            _context.Movies.Remove(movieFromDb);
        }

        public async Task SaveAsync() => await _context.SaveChangesAsync();
        
        private bool _disposed = false;
        protected virtual void Dispose(bool disposing)
        {
            if(!_disposed)
            {
                if(disposing)
                {
                    _context.Dispose();
                }
            }
            _disposed = true;
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        
    }
}
