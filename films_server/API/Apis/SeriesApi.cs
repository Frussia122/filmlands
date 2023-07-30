using films_server.Data;
using films_server.Data.SeriesModel;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;

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

            app.MapGet("/series/{id}", GetById)
                .Produces<Series>(StatusCodes.Status200OK)
                .WithName("GetSeries")
                .WithTags("Getters");

            app.MapPost("/series", Post)
                .Accepts<Series>("application/json")
                .Produces<Series>(StatusCodes.Status201Created)
                .WithName("CreateSeries")
                .WithTags("Creators");
            app.MapPut("/series", Put)
                .Accepts<Series>("application/json")
                .WithName("UpdateSeries")
                .WithTags("Updaters");

            app.MapDelete("/series/{id}", Delete)
                .WithName("DeleteSeries")
                .WithTags("Deleters");
        }

        [Authorize]
        private async Task<IResult> Get(ISeriesRepository repository, IHttpContextAccessor httpContextAccessor)
        {
            var httpContext = httpContextAccessor.HttpContext;
            return Results.Ok(await repository.GetSeriesAsync(httpContext));
        }

        [Authorize]
        private async Task<IResult> GetById(int id, ISeriesRepository repository) =>
             await repository.GetSeriesByIdAsync(id)
             is Series serie
             ? Results.Ok(serie)
             : Results.NotFound();

        [Authorize]
        private async Task<IResult> Post([FromBody] Series series, ISeriesRepository repository)
        {
            await repository.InsertSeriesAsync(series);
            await repository.SaveAsync();
            return Results.Created($"/series/{series.Id}", series);
        }

        [Authorize]
        private async Task<IResult> Put([FromBody] Series series, [FromServices] ISeriesRepository repository)
        {
            await repository.UpdateSeriesAsync(series);
            await repository.SaveAsync();
            return Results.NoContent();
        }

        [Authorize]
        private async Task<IResult> Delete(int id, ISeriesRepository repository)
        {
            await repository.DeleteSeriesAsync(id);
            await repository.SaveAsync();
            return Results.NoContent();
        }
    }
}
