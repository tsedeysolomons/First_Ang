// Models/Product.cs
// This is like creating a table in SQL

// Models/User.cs
// This creates the "Users" table in your new_registers database
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    [Table("Users")]
    public class User
    {
        [Key]  // Primary key
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string FullName { get; set; } = string.Empty;

        [Required]
        [EmailAddress]
        [MaxLength(100)]
        public string Email { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)] // Increased to hold the BCrypt hash
        public string Password { get; set; } = string.Empty;

        [MaxLength(20)]
        public string? Phone { get; set; }  // Nullable

        [MaxLength(50)]
        public string? Department { get; set; }  // Nullable

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}