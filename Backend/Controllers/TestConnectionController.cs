using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/debug/[action]")]
    public class TestConnectionController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetStatus()
        {
            return Ok(new { Message = "Backend is reachable!", Timestamp = DateTime.Now });
        }
    }
}