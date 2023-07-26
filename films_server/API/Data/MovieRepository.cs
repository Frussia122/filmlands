using System.Runtime.CompilerServices;
using films_server.Data.MovieModel;
using Newtonsoft.Json.Serialization;
using Microsoft.AspNetCore.Mvc;
using Azure.Core;

namespace films_server.Data
{
    public class MovieRepository : IMovieRepository
    {
        private readonly MovieDb _context;
        public MovieRepository(MovieDb context)
        {
            _context = context;
        }

        public async Task<List<Movie>> GetMoviesAsync(HttpContext httpContext)
        {
            if(httpContext == null) return new List<Movie>();

            int? count = httpContext.Request.Query.TryGetValue("count", out var values) ?
                     int.Parse(values.ToString()) :10;

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
            var temp = uniqueMovies.Take(count.Value).ToList(); ;
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
        public async Task InsertMovieAsync(Movie movie) 
        {
            await _context.Movies.AddAsync(movie);
        }

        public async Task UpdateMovieAsync(Movie movie)
        {
            if (movie.Id == null) return;
            
            var movieFromDb = await _context.Movies
                .Include(m => m.Poster)
                .Include(m => m.Descriptions)
                .Include(m => m.MovieGenre)
                .Include(m => m.Actors)
                .FirstOrDefaultAsync(m => m.Id == movie.Id);

            if (movieFromDb == null) return;

            movieFromDb.Title = movie.Title;
            movieFromDb.ReleaseDate = movie.ReleaseDate;
            movieFromDb.Duration = movie.Duration;
            movieFromDb.ReleaseDate = movie.ReleaseDate;
            movieFromDb.Trailer = movie.Trailer;
            movieFromDb.Raiting = movie.Raiting;
            movieFromDb.Director = movie.Director;
            movieFromDb.Country = movie.Country;
            movieFromDb.AgeLimit = movie.AgeLimit;
            movieFromDb.Poster = movie.Poster;
            movieFromDb.Actors = movie.Actors;
            movieFromDb.MovieGenre = movie.MovieGenre;
            movieFromDb.Descriptions = movie.Descriptions;
        }

        public async Task  DeleteMovieAsync(int movieId)
        {
            var movieFromDb = await _context.Movies
                .Include(m => m.Poster)
                .Include(m => m.Descriptions)
                .Include(m => m.MovieGenre)
                .Include(m => m.Actors)
                .FirstOrDefaultAsync(m => m.Id == movieId);
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
