using System.ComponentModel.DataAnnotations.Schema;

namespace films_server.Data.MovieModel
{
    public class Actor
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Picture { get; set; }
        public string BirthDate { get; set; }
        public string BirthPlace { get; set; }
        public string Description { get; set; }
        public int MovieId { get; set; }

        public static void AddActorsToMovies(List<Movie> temp, List<Actor> allActors)
        {
            foreach (var actor in allActors)
            {
                var index = temp.FindIndex(m => m.Id == actor.MovieId);
                if (index != -1)
                {
                    if (temp[index].Actors == null)
                    {
                        temp[index].Actors = new List<Actor>(); // Инициализируем список Actors, если он null
                    }
                    temp[index].Actors.Add(actor);
                }

            }
        }

    }
}
