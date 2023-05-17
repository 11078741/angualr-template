import {Component, OnInit} from '@angular/core';
import {
  GenericDataTableConfig,
  RowAction, TableAction
} from "../../../shared/components/generic-data-table/generic-data-table.component";
import {Employee, EmployeeType} from "../../models/employee.model";
import {BreadcrumbService} from "../../../shared/components/layout/breadcrumb/breadcrumb.service";
import {EmployeesService} from "../employees.service";
import {shareReplay} from "rxjs";

@Component({
  selector: 'app-employee-type-list',
  templateUrl: './employee-type-list.component.html',
  styleUrls: ['./employee-type-list.component.scss']
})
export class EmployeeTypeListComponent implements OnInit {

  public employeeTypeListConfig: GenericDataTableConfig<EmployeeType>;


  constructor(
    private breadcrumbService: BreadcrumbService,
    private employeeService: EmployeesService
  ) {
  }

  ngOnInit(): void {
    this.setupBreadcrumbItems();
    this.setupEmployeeTypeListConfig();
  }


  private setupBreadcrumbItems() {
    this.breadcrumbService.setBreadcrumbs([
      {label: 'Employees', routerLink: '/employees'},
      {label: 'Employee Types', disabled: true},
    ])
  }

  private setupEmployeeTypeListConfig() {
    this.employeeTypeListConfig = {
      title: 'Employees',
      columns: [
        {field: 'id', header: 'Id'},
        {field: 'name', header: 'Name'},
        {field: 'description', header: 'Description'},
      ],
      endpoint: () => this.employeeService.getEmployeeTypes().pipe(shareReplay()),
      rowActions: [
        {
          action: null,
          icon: 'pencil',
          severity: 'primary',
          tooltip: 'Edit'
        },
        {
          action: null,
          icon: 'trash',
          severity: 'danger',
          tooltip: 'Delete'
        },
      ].filter(a => !!a) as RowAction<EmployeeType>[],
      tableActions: [{
        action: null,
        label: '',
        icon: 'pi-plus'
      }].filter(a => !!a) as TableAction[],
      sortableColumns: ['id', 'name', 'description'],
      globalFilterFields: ['id', 'name', 'description']
    }
  }
}
