using films_server.Data;
using films_server.Data.SeriesModel;
using Microsoft.AspNetCore.Builder;

namespace films_server.Apis
{
    public class SeriesApi : IApi
    {
        public void Register(WebApplication app)
        {
            app.MapGet("/series", Get)
                .Produces<List<Series>>(StatusCodes.Status200OK)
                .WithName("GetAllSeries")
                .WithTags("Getters");
        }

        [Authorize]
        private async Task<IResult> Get(ISeriesRepository repository, IHttpContextAccessor httpContextAccessor)
        {
            var httpContext = httpContextAccessor.HttpContext;
            return Results.Ok(await repository.GetSeriesAsync(httpContext));
        }
    }
}
