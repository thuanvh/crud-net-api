using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Interfaces;
using Infrastructure.Data;
using Infrastructure.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
 
namespace Infrastructure.Services
{
    public static class ServicesConfig
    {
        public static IServiceCollection AddApplication(this IServiceCollection services, IConfiguration config)
        {
 
            services.AddDbContext<AppDbContext>(opt =>
            {
                opt.UseSqlite(config.GetConnectionString("connection"));
            });
 
            services.AddScoped<IEmployeeRepo, EmployeeRepository>();
 
            
            return services;
        }
    }
}