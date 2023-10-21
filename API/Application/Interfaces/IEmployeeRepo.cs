using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
  
namespace Application.Interfaces
{
    public interface IEmployeeRepo
    {
        Task<IReadOnlyList<Employee>> GetEmployeeListAsync();
        Employee GetEmployeeById(int id);
        Employee CreateEmployee(Employee employee);
        Employee UpdateEmployee(Employee employee);
        void DeleteEmployee(int id);
 
    }
}