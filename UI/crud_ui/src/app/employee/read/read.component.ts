import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/shared/modules/Employee';
 
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  employee? :any;
 
 constructor(private employeeServices: EmployeeService, private router:ActivatedRoute){}
 
  ngOnInit(): void {
    this.loadEmployee();
  }
 
  loadEmployee(){
    this.employeeServices.GetEmployee().subscribe({
       next : emp => this.employee=emp,
       error: error=> alert(error)       
    });
  }
}