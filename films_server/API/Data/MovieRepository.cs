using System.Runtime.CompilerServices;
using films_server.Data.MovieModel;
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
        public async Task<List<Movie>> GetMoviesAsync()
        {
            var allMovies = await _context.Movies.ToListAsync();

            HashSet<Movie> uniqueMovies = new HashSet<Movie>();

            // Фильтруем повторяющиеся фильмы и добавляем их в HashSet
            foreach (Movie movie in allMovies)
            {
                uniqueMovies.Add(movie);
            }

            // Возвращаем список уникальных фильмов
            var temp = uniqueMovies.ToList();

            var allActors = await _context.Actors.ToListAsync();

            Actor.AddActorsToMovies(temp, allActors);
            return temp;
        }

        public Task<List<Movie>> GetMoviesAsync(string title) =>
            _context.Movies.Where(h => h.Title.Contains(title)).ToListAsync();

        public async Task<Movie> GetMovieAsync(int movieId) =>
            await _context.Movies.FindAsync(new object[]{movieId});
        

     
        

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
