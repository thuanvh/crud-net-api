import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit{
employee?:any;
id?:any; 
 
 
 
constructor(private employeeService:EmployeeService, private router:ActivatedRoute,private route:Router)
{
  this.id = this.router.snapshot.paramMap.get('id');
}
 
 
EmpForm = new FormGroup({
  firstName : new FormControl('',Validators.required),
  lastName: new FormControl('',Validators.required),
  street: new FormControl('',Validators.required),
  city: new FormControl('',Validators.required),
  state: new FormControl('',Validators.required),
  id: new FormControl('',Validators.required) 
});
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
   this.employeeService.UpdateEmployee(this.EmpForm.value).subscribe({
    next:()=>this.route.navigateByUrl('/'),
    error:()=>alert("Please check...!")
   })
}
}