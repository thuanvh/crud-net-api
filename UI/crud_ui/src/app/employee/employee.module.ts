import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';
import { DeleteComponent } from './delete/delete.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
 
 
 
@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    ReadComponent,
    DeleteComponent
  ],
  imports: [
    EmployeeRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    ReadComponent,
  ],
})
export class EmployeeModule { }