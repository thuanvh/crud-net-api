import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  title : string ='Employee Registeration Form';
 
  EmpForm = new FormGroup({
    firstName : new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    street: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required) 
  });
 
   constructor(private employeeService: EmployeeService, private router: Router){}
 
  onSubmit(){
    this.employeeService.CreateEmployee(this.EmpForm.value).subscribe({
      next:()=> this.router.navigateByUrl('/'),
      error:()=> alert("Please check ...!") 
    })
     
  }
}