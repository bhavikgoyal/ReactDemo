using Microsoft.AspNetCore.Mvc;
using TestDemo.Service;

namespace TestDemo.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class HomeBannerController : ControllerBase
	{
		private readonly ITenantService _tenantService;

		public HomeBannerController(ITenantService tenantService)
		{
			_tenantService = tenantService;
		}

		[HttpGet]
		public IActionResult GetHomeBanner()
		{
			// Use the static host "bar" to get the tenant for the HomeBannerController
			var tenant = _tenantService.GetTenantByHost("bar");
			if (tenant == null)
			{
				return NotFound("Tenant not found for the provided host.");
			}

			return Ok(tenant);
		}
	}
}
