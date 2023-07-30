using films_server.Auth;
using films_server.Data;
using Microsoft.AspNetCore.Http;

namespace films_server.Apis
{
    public class MovieApi :IApi
    {
        public void Register(WebApplication app)
        {
            app.MapGet("/movies", Get)
                .Produces<List<Movie>>(StatusCodes.Status200OK)
                .WithName("GetAllMovies")
                .WithTags("Getters");

            app.MapGet("/movies/{id}", GetById)
                .Produces<Movie>(StatusCodes.Status200OK)
                .WithName("GetMovie")
                .WithTags("Getters");

            app.MapPost("/movies",Post)
                .Accepts<Movie>("application/json")
                .Produces<Movie>(StatusCodes.Status201Created)
                .WithName("CreateMovie")
                .WithTags("Creators");

            app.MapPut("/movies",Put)
                .Accepts<Movie>("application/json")
                .WithName("UpdateMovie")
                .WithTags("Updaters");

            app.MapDelete("/movies/{id}",Delete)
                .WithName("DeleteMovie")
                .WithTags("Deleters");

        }

        [Authorize]
        private async Task<IResult> Get(IMovieRepository repository, IHttpContextAccessor httpContextAccessor)
        {
            var httpContext = httpContextAccessor.HttpContext;
            return Results.Ok(await repository.GetMoviesAsync(httpContext));
        }
        [Authorize]
        private  async Task<IResult> GetById(int id, IMovieRepository repository) =>
             await repository.GetMovieAsync(id)
             is Movie movie
             ? Results.Ok(movie)
             : Results.NotFound();

        [Authorize]
        private async Task<IResult> Post([FromBody] Movie movie, IMovieRepository repository)
        {
            await repository.InsertMovieAsync(movie);
            await repository.SaveAsync();
            return Results.Created($"/movies/{movie.Id}", movie);
        }

        [Authorize]
        private async Task<IResult>Put([FromBody] Movie movie, [FromServices] IMovieRepository repository) 
        {
                await repository.UpdateMovieAsync(movie);
                await repository.SaveAsync();
                return Results.NoContent();
        }

        [Authorize]
        private async Task<IResult> Delete(int id, IMovieRepository repository) 
        {
                await repository.DeleteMovieAsync(id);
                await repository.SaveAsync();
                return Results.NoContent();
        }
}
}
