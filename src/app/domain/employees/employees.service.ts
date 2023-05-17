import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Employee, EmployeeType} from "../models/employee.model";
import {employeeData, employeeTypeData} from "../../shared/dummy-data";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  public getEmployees$(): Observable<Employee> {
    return of(employeeData);
  }

  public getEmployeeTypes(): Observable<EmployeeType> {
    return of(employeeTypeData);
  }
}
