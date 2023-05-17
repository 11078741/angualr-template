import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {MenuItem} from "primeng/api";
import {BreadcrumbService} from "./breadcrumb.service";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  imports: [
    BreadcrumbModule,
    AsyncPipe
  ],
  standalone: true
})
export class BreadcrumbComponent implements OnInit {

  public items$: Observable<MenuItem[]>;

  constructor(private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit(): void {
    this.items$ = this.breadcrumbService.breadcrumbs$;
  }

}
