// Controllers/UsersController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;
using Backend.DTO;
using Backend.Data;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly AppDbContext _db;
    public UsersController(AppDbContext db) => _db = db;

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterDto dto)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        if (await _db.Users.AnyAsync(u => u.Email == dto.Email))
            return Conflict(new { message = "Email already in use" });

        var user = new User
        {
            FullName = dto.FullName,
            Email = dto.Email,
            Password = BCrypt.Net.BCrypt.HashPassword(dto.Password), // DO NOT store plain passwords
            Phone = dto.Phone,
            Department = dto.Department,
            CreatedAt = DateTime.UtcNow
        };

        _db.Users.Add(user);
        await _db.SaveChangesAsync();

        // Return a safe response (don't include password)
        var result = new { user.Id, user.FullName, user.Email, user.Phone, user.Department, user.CreatedAt };
        return CreatedAtAction(nameof(GetById), new { id = user.Id }, result);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var user = await _db.Users.FindAsync(id);
        if (user == null) return NotFound();
        var result = new { user.Id, user.FullName, user.Email, user.Phone, user.Department, user.CreatedAt };
        return Ok(result);
    }
}