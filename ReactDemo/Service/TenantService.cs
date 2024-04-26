using System;
using System.Collections.Generic;
using System.Linq;

namespace TestDemo.Service
{
    public interface ITenantService
    {
        Tenant GetTenantByHost(string host);
    }

    public class TenantService : ITenantService
    {
        private readonly List<Tenant> _tenants;

        public TenantService()
        {
            _tenants = new List<Tenant>
            {
                new Tenant(1, "foo", true, "theme1"),
                new Tenant(2, "bar", true, "theme2")
            };
        }

        public Tenant GetTenantByHost(string host)
        {
            return _tenants.FirstOrDefault(t => t.Host.Equals(host, StringComparison.OrdinalIgnoreCase));
        }
    }
}
