import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { Employee } from '../shared/modules/Employee';
import { map } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = 'http://localhost:5180/api';
    
  constructor(private http : HttpClient ,private router : Router ) { }
 
  CreateEmployee(values:any){
      return this.http.post<Employee>(this.baseUrl + '/Employee/',values).pipe(
        map(employee=> {
          alert("Employee Created Successfully...!" + employee);
        })
      )
  }
 
  GetEmployee(){
    return this.http.get<Employee>(this.baseUrl + '/Employee/')
  }
 
  GetEmployeeById(id:number){
    return this.http.get<Employee>(this.baseUrl + '/Employee/'+ id)
  }
 
  UpdateEmployee(values:any){
 
    return this.http.put<Employee>(this.baseUrl + '/Employee/', values).pipe(
      map(emp=>{
        alert("Employee Updated Successfully...!" + emp);
      })
    )
  }
  RemoveEmployee(id:number){
    return this.http.delete(this.baseUrl + '/Employee/' + id);
 
  }
}