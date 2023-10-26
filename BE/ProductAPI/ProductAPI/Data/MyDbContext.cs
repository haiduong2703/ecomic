using Microsoft.EntityFrameworkCore;

namespace ProductAPI.Data
{
    public class MyDbContext:DbContext
    {
        public MyDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Product> Products { get; set; }
    }
}
