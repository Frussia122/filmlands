using System.Runtime.CompilerServices;
using films_server.Data.MovieModel;
using Newtonsoft.Json.Serialization;

namespace films_server.Data
{
    public class MovieRepository : IMovieRepository
    {
        private readonly MovieDb _context;
        public MovieRepository(MovieDb context)
        {
            _context = context;
        }
        public async Task<List<Movie>> GetMoviesAsync()
        {
            var allMovies = await _context.Movies
                .Include(m=>m.Poster)
                .Include(m=>m.Descriptions)
                .Include(m => m.MovieGenre)
                .Include(m=>m.Actors)
                .ToListAsync();

            HashSet<Movie> uniqueMovies = new HashSet<Movie>();

            // Фильтруем повторяющиеся фильмы и добавляем их в HashSet
            foreach (Movie movie in allMovies)
            {
                uniqueMovies.Add(movie);
            }

            // Возвращаем список уникальных фильмов
            var temp = uniqueMovies.ToList();
            return temp;
        }

        public async Task<Movie> GetMovieAsync(int movieId)
        {
            var movie = await _context.Movies
                .Include(m => m.Poster)
                .Include(m => m.Descriptions)
                .Include(m => m.MovieGenre)
                .Include(m => m.Actors)
                .FirstOrDefaultAsync(m => m.Id == movieId);

            return movie;
        }





        public async Task UpdateMovieAsync(Movie movie)
        {
            if (movie.Id == null) return; 
            var movieFromDb = await _context.Movies.FindAsync(new object[]{movie.Id});
            if (movieFromDb == null) return;

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
