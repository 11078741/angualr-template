import {Component, OnInit} from '@angular/core';
import {
  GenericDataTableConfig,
  RowAction,
  TableAction
} from "../../../shared/components/generic-data-table/generic-data-table.component";
import {Employee} from "../../models/employee.model";
import {BreadcrumbService} from "../../../shared/components/layout/breadcrumb/breadcrumb.service";
import {shareReplay} from "rxjs";
import {EmployeesService} from "../employees.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employeeListConfig: GenericDataTableConfig<Employee>;


  constructor(
    private breadcrumbService: BreadcrumbService,
    private employeeService: EmployeesService
  ) {
  }

  ngOnInit(): void {
    this.setupBreadCrumbItems();
    this.setupEmployeeListConfig();
  }


  private setupBreadCrumbItems() {
    this.breadcrumbService.setBreadcrumbs(
      [
        {
          label: 'Employees',
          disabled: true
        }
      ]
    )
  }

  private setupEmployeeListConfig() {
    this.employeeListConfig = {
      title: 'Employees',
      columns: [
        {field: 'id', header: 'Id'},
        {field: 'title', header: 'Title'},
        {field: 'name', header: 'Name'},
        {field: 'surname', header: 'Surname'},
        {field: 'dateOfBirth', header: 'Date of Birth'},
        {field: 'email', header: 'Email'},
        {field: 'phoneNumber', header: 'Phone Number'},
        {field: 'employeeType.name', header: 'Employee Type'},
      ],
      endpoint: () => this.employeeService.getEmployees$().pipe(shareReplay()),
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
      ].filter(a => !!a) as RowAction<Employee>[],
      tableActions: [{
        action: null,
        label: '',
        icon: 'pi-plus'
      }].filter(a => !!a) as TableAction[],
      sortableColumns: ['id', 'title', 'name', 'surname', 'email', 'employee.name'],
      globalFilterFields: ['id', 'title', 'name', 'surname', 'email', 'employee.name']
    }
  }
}
