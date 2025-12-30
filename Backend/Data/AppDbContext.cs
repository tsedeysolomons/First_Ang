// Data/AppDbContext.cs
// This is your app's connection to the database
using Microsoft.EntityFrameworkCore;
//using First_Ang.Backend.Models;  // Import Product model
// Data/AppDbContext.cs
using Backend.Models;

namespace Backend.Data
{
    public class AppDbContext : DbContext
    {
        // This creates the "Users" table in SQL Server
        public DbSet<User> Users { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        // Optional: Configure table details
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Make Email unique
            modelBuilder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();

            // Set default value for CreatedAt
            modelBuilder.Entity<User>()
                .Property(u => u.CreatedAt)
                .HasDefaultValueSql("GETDATE()");  // SQL Server function
        }
    }
}