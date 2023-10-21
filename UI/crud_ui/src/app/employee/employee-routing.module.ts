import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule   } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { CreateComponent } from './create/create.component';
 
 
const routes : Routes=[
 
  {path:'', component:ReadComponent},
  {path:'Create', component:CreateComponent}, 
  {path:'update/:id', component:UpdateComponent},
  {path:'delete/:id', component:DeleteComponent},
 
]
 
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class EmployeeRoutingModule { }