namespace films_server.Data.SeriesModel
{
    public interface ISeriesRepository : IDisposable
    {
        Task<List<Series>> GetSeriesAsync(HttpContext httpContext);
        Task<Series> GetSeriesByIdAsync(int seriesId);
        Task InsertSeriesAsync(Series series);
        Task UpdateSeriesAsync(Series series);
        Task DeleteSeriesAsync(int seriesId);
        Task SaveAsync();

    }
}
