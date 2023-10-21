using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain.Entities;
using Microsoft.AspNetCore.Mvc;
 
namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepo _employeeRepo;
 
 
        public EmployeeController(IEmployeeRepo employeeRepo)
        {
            _employeeRepo = employeeRepo;
 
        }
        [HttpGet]
        public async Task<IReadOnlyList<Employee>> GetEmployees()
        {
 
            return await this._employeeRepo.GetEmployeeListAsync();
        }
        [HttpPost]
        public ActionResult EmployeePost(Employee employees)
        {
 
            var result = _employeeRepo.CreateEmployee(employees);
            return Ok(result);
        }
 
        [HttpPut]
        public ActionResult EmployeePut(Employee employee)
        {
 
 
            var result = _employeeRepo.UpdateEmployee(employee);
            return Ok(result);
        }
 
        [HttpGet("{id}")]
        public Employee EmployeeGetById(int id)
        {
            var result = this._employeeRepo.GetEmployeeById(id);
            return result;
        }
        [HttpDelete("{id}")]
        public ActionResult DeleteEmployee(int id)
        {
            this._employeeRepo.DeleteEmployee(id);
            return Ok("Employee Deleted");
        }
    }
}