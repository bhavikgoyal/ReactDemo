using Microsoft.AspNetCore.Mvc;
using TestDemo.Service;

namespace TestDemo.Controllers
{
    //[ApiController]
    //[Route("[controller]")]
    //public class WeatherForecastController : ControllerBase
    //{
    //    private static readonly string[] Summaries = new[]
    //    {
    //    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    //};

    //    private readonly ILogger<WeatherForecastController> _logger;

    //    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    //    {
    //        _logger = logger;
    //    }

    //    [HttpGet(Name = "GetWeatherForecast")]
    //    public IEnumerable<WeatherForecast> Get()
    //    {
    //        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
    //        {
    //            Date = DateTime.Now.AddDays(index),
    //            TemperatureC = Random.Shared.Next(-20, 55),
    //            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
    //        })
    //        .ToArray();
    //    }
    //}
    [ApiController]
    [Route("api/[controller]")]
    public class FaviconController : ControllerBase
    {
        private readonly ITenantService _tenantService;

        public FaviconController(ITenantService tenantService)
        {
            _tenantService = tenantService;
        }

        [HttpGet]
        public IActionResult GetFavicon()
        {
			// Call the GetTenantByHost method of the TenantService to retrieve tenant data based on the host
			var tenant = _tenantService.GetTenantByHost("foo");
			if (tenant == null)
            {
                return NotFound("Tenant not found for the provided host.");
            }

            return Ok(tenant);
        }
    }
}