using films_server.Data.MovieModel;

public class MovieDb : DbContext
{
    public MovieDb(DbContextOptions<MovieDb> options) : base(options) { }
    public DbSet<Movie> Movies => Set<Movie>();
    public DbSet<Actor> Actors=> Set<Actor>();
    public DbSet<Poster> Poster => Set<Poster>();
    public DbSet<MovieGenre> MovieGenre => Set<MovieGenre>();
    public DbSet<Description> Description => Set<Description>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Movie>()
            .Property(m => m.Id)
            .ValueGeneratedOnAdd();
    }
}



