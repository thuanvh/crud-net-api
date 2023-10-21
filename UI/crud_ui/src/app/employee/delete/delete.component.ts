import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
 
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
employee?:any;
id?:any; 
 
constructor(private employeeService:EmployeeService, private router : ActivatedRoute, private route:Router)
{ 
    this.id =this.router.snapshot.paramMap.get('id');
} 
  ngOnInit(): void {    
    this.getEmployee();
  }
  getEmployee(){
    
    if(this.id) this.employeeService.GetEmployeeById(this.id).subscribe({
      next : emp => this.employee = emp,
      error : error=>alert(error)
    });
  }
  onSubmit(){   
      this.employeeService.RemoveEmployee(this.id).subscribe({
      next : ()=>this.route.navigateByUrl('/'),
      error :()=>alert("Please check..!")
      
    });
  } 
}