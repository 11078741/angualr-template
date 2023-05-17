import {Component, Input, OnInit} from '@angular/core';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {NgForOf, NgIf} from "@angular/common";
import {TooltipModule} from "primeng/tooltip";
import {RippleModule} from "primeng/ripple";
import {MessagesModule} from "primeng/messages";
import {Observable, tap} from "rxjs";
import {Message} from "primeng/api";
import {TransformColumnPipe} from "./transform-column.pipe";
import {employeeData} from "../../dummy-data";

export interface ColumnData {
  field: string;
  header: string;
  rowDisplay?: (data: any) => string
}

export interface TableAction {
  action: () => any;
  icon: string;
  label?: string;
}

export interface RowAction<T> {
  action: (row: T) => void;
  icon?: string;
  iconCallback?: (row: T) => string;
  severity?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger';
  tooltip?: string;
  tooltipCallback?: (row: T) => string;
}

export interface GenericDataTableConfig<T> {
  title?: string;
  columns: ColumnData[];
  endpoint: () => Observable<any>;
  paginator?: boolean;
  rowOptions?: number[];
  rowsPerPage?: number;
  rowActions?: RowAction<T>[];
  sortableColumns: string[];
  globalFilterFields?: string[];
  tableActions?: TableAction[];
}

@Component({
  selector: 'app-generic-data-table',
  templateUrl: './generic-data-table.component.html',
  styleUrls: ['./generic-data-table.component.scss'],
  imports: [
    TableModule,
    ButtonModule,
    NgForOf,
    NgIf,
    TooltipModule,
    RippleModule,
    MessagesModule,
    TransformColumnPipe
  ],
  standalone: true
})
export class GenericDataTableComponent implements OnInit {

  @Input() public tableData: GenericDataTableConfig<any>;
  public messages: Message[];

  public loading: boolean;
  public data: any[]
  public totalRecords: number;
  private page: number;
  private size: number;

  constructor() {
    this.loading = false;
    this.data = [];
    this.totalRecords = 0;
  }

  ngOnInit() {
    this.messages = [{severity: 'info', summary: 'Info', detail: `No ${this.tableData.title} found.`}]
    console.log("Table Data: ", this.tableData);
    this.tableData.endpoint().pipe(
      tap(
        data => {
          console.log('Data: ', data);
          this.data = data;
        }
      )
    ).subscribe();
  }

  getIcon(rowAction: RowAction<any>, rowData: any) {
    return rowAction.icon ?? rowAction.iconCallback(rowData);
  }

  getTooltip(rowAction: RowAction<any>, row: any) {
    return rowAction.tooltip ?? rowAction.tooltipCallback(row);
  }
}
