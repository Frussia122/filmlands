using films_server.Data.SeriesModel;

namespace films_server.Data
{
    public class SeriesDb : DbContext
    {
        public SeriesDb(DbContextOptions<SeriesDb> options) : base(options) { }
        public DbSet<Series> Series => Set<Series>();
        public DbSet<SeriesActor> SeriesActor => Set<SeriesActor>();
        public DbSet<Season> Season => Set<Season>();
        public DbSet<SeriesPoster> SeriesPoster => Set<SeriesPoster>();
        public DbSet<SeriesGenre> SeriesGenre => Set<SeriesGenre>();
        public DbSet<Episode> Episode => Set<Episode>();
        public DbSet<SeasonPoster> SeasonPoster => Set<SeasonPoster>();
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Movie>()
                .Property(m => m.Id)
                .ValueGeneratedOnAdd();
        }


    }
}
