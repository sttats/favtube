using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/cs")]
public class HelloController : ControllerBase
{
    [HttpGet("hello")]
    public IActionResult Get()
    {
        return Ok(new { message = "Hello from ASP.NET Core Web API!" });
    }
}