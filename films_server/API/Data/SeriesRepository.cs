using films_server.Data.SeriesModel;
using Microsoft.EntityFrameworkCore;
using films_server.Data;

namespace films_server.Data
{
    public class SeriesRepository : ISeriesRepository
    {
        private readonly SeriesDb _context;
        public SeriesRepository(SeriesDb context)
        {
            _context = context;
        }
        public async Task<List<Series>> GetSeriesAsync(HttpContext httpContext)
        {
            if (httpContext == null) return new List<Series>();

            int? count = httpContext.Request.Query.TryGetValue("count", out var values) ?
                     int.Parse(values.ToString()) : 10;

            var allSeries = await _context.Series
                .Include(m=>m.SeriesActors)
                .Include(m=>m.SeriesGenres)
                .Include(m=>m.SeriesPosters)
                .Include(m=>m.Seasons)
                    .ThenInclude(season => season.Episodes)
                .Include(m => m.Seasons)
                    .ThenInclude(season => season.SeasonPosters)
                .ToListAsync();

            HashSet<Series> uniqueSeries = new HashSet<Series>();

            // Фильтруем повторяющиеся фильмы и добавляем их в HashSet
            foreach (Series serie in allSeries)
            {
                uniqueSeries.Add(serie);
            }
            // Возвращаем список уникальных фильмов
            var temp = uniqueSeries.Take(count.Value).ToList(); ;
            return temp;
        }
        public async Task<Series> GetSeriesByIdAsync(int seriesId)
        {
            var series = await _context.Series
                .Include(m => m.SeriesActors)
                .Include(m => m.SeriesGenres)
                .Include(m => m.SeriesPosters)
                .Include(m => m.Seasons)
                    .ThenInclude(season => season.Episodes)
                .Include(m => m.Seasons)
                    .ThenInclude(season => season.SeasonPosters)
                .FirstOrDefaultAsync(m=> m.Id == seriesId);

            return series;
        }
        public async Task InsertSeriesAsync(Series series)
        {
            await _context.Series.AddAsync(series);
        }
        public async Task UpdateSeriesAsync(Series series)
        {
            if (series.Id == null) return;

            var seriesFromDb = await _context.Series
                .Include(m => m.SeriesActors)
                .Include(m => m.SeriesGenres)
                .Include(m => m.SeriesPosters)
                .Include(m => m.Seasons)
                    .ThenInclude(season => season.Episodes)
                .Include(m => m.Seasons)
                    .ThenInclude(season => season.SeasonPosters)
                .FirstOrDefaultAsync(m => m.Id == series.Id);

            if (seriesFromDb == null) return;

            seriesFromDb.Title = series.Title;
            seriesFromDb.ReleaseDate = series.ReleaseDate;
            seriesFromDb.Duration = series.Duration;
            seriesFromDb.ReleaseDate = series.ReleaseDate;
            seriesFromDb.Trailer = series.Trailer;
            seriesFromDb.Raiting = series.Raiting;
            seriesFromDb.Director = series.Director;
            seriesFromDb.Country = series.Country;
            seriesFromDb.AgeLimit = series.AgeLimit;
            seriesFromDb.SeriesPosters = series.SeriesPosters;
            seriesFromDb.SeriesActors = series.SeriesActors;
            seriesFromDb.SeriesGenres = series.SeriesGenres;
            seriesFromDb.Seasons = series.Seasons;
        }
        public async Task DeleteSeriesAsync(int seriesId)
        {
            var seriesFromDb = await _context.Series
                .Include(m => m.SeriesActors)
                .Include(m => m.SeriesGenres)
                .Include(m => m.SeriesPosters)
                .Include(m => m.Seasons)
                    .ThenInclude(season => season.Episodes)
                .Include(m => m.Seasons)
                    .ThenInclude(season => season.SeasonPosters)
                .FirstOrDefaultAsync(m => m.Id == seriesId);
            if (seriesFromDb == null) return;
            _context.Series.Remove(seriesFromDb);
        }
        public async Task SaveAsync() => await _context.SaveChangesAsync();
        private bool _disposed = false;
        protected virtual void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
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
