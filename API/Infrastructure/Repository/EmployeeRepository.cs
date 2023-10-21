using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain.Entities;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
 
namespace Infrastructure.Repository
{
    public class EmployeeRepository : IEmployeeRepo
    {
 
        private readonly AppDbContext _context;
 
        public EmployeeRepository(AppDbContext context)
        {
            _context = context;
        }
        public Employee CreateEmployee(Employee employees)
        {
            _context.Employees.Add(employees);
            var result = _context.SaveChangesAsync();
            if (result.IsCompletedSuccessfully) { return employees; }
 
            return null;
        }
 
        public Employee GetEmployeeById(int id)
        {
            return _context.Employees.FindAsync(id).Result;
        }
 
        public async Task<IReadOnlyList<Employee>> GetEmployeeListAsync()
        {
            return await _context.Employees.ToListAsync();
 
        }
 
        public Employee UpdateEmployee(Employee employee)
        {
            this._context.Employees.Update(employee);
            _context.SaveChanges();
            return employee;
        }
 
        public void DeleteEmployee(int id)
        {
            var result = GetEmployeeById(id);
            _context.Employees.Remove(result);
            _context.SaveChanges();
 
        }
    }
}