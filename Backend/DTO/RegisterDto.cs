// DTOs/RegisterDto.cs
using System.ComponentModel.DataAnnotations;

namespace Backend.DTO;

public class RegisterDto
{
    [Required] public string FullName { get; set; } = string.Empty;
    [Required, EmailAddress] public string Email { get; set; } = string.Empty;

    [Required, MinLength(6)]
    [RegularExpression(@"^(?=.*[A-Za-z])(?=.*\d).+$", ErrorMessage = "Password must contain both letters and numbers.")]
    public string Password { get; set; } = string.Empty;

    [RegularExpression(@"^\+?[\d\s\-]+$", ErrorMessage = "Phone number can only contain digits, spaces, dashes, and +.")]
    public string? Phone { get; set; }

    public string? Department { get; set; }
}