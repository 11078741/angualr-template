import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {CardModule} from "primeng/card";
import {GenericDataTableComponent} from "../../shared/components/generic-data-table/generic-data-table.component";
import { EmployeeTypeListComponent } from './employee-type-list/employee-type-list.component';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeTypeListComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    CardModule,
    GenericDataTableComponent
  ]
})
export class EmployeesModule { }
