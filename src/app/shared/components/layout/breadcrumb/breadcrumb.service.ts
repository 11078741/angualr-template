import {Injectable} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  public breadcrumbs$: Observable<MenuItem[]>;
  private breadcrumbs: Subject<MenuItem[]>;

  constructor() {
    this.breadcrumbs = new Subject<MenuItem[]>();
    this.breadcrumbs$ = this.breadcrumbs.asObservable();
  }

  public setBreadcrumbs(breadcrumbItems: MenuItem[]): void {
    this.breadcrumbs.next((breadcrumbItems).map(item => Object.assign({}, item, {
        routerLinkActiveOptions: {exact: true}
      })
    ));
  }
}
