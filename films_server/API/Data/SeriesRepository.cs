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
        public Task<Series> GetSeriesByIdAsync(int seriesId)
        {
            throw new NotImplementedException();
        }
        public Task InsertSeriesAsync(Series series)
        {
            throw new NotImplementedException();
        }
        public Task UpdateSeriesAsync(Series series)
        {
            throw new NotImplementedException();
        }
        public Task DeleteSeriesAsync(int seriesId)
        {
            throw new NotImplementedException();
        }
        public Task SaveAsync()
        {
            throw new NotImplementedException();
        }
        public void Dispose()
        {
            throw new NotImplementedException();
        }  
    }
}
