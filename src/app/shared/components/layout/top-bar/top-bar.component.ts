import {Component, OnInit} from '@angular/core';
import {OverlayPanelModule} from "primeng/overlaypanel";
import {ImageModule} from "primeng/image";
import {MegaMenuModule} from "primeng/megamenu";
import {AvatarModule} from "primeng/avatar";
import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";
import {TitleCasePipe, UpperCasePipe} from "@angular/common";
import {TagModule} from "primeng/tag";
import {MenubarModule} from "primeng/menubar";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  imports: [
    OverlayPanelModule,
    ImageModule,
    MegaMenuModule,
    AvatarModule,
    DividerModule,
    ButtonModule,
    TitleCasePipe,
    TagModule,
    UpperCasePipe,
    MenubarModule
  ],
  standalone: true
})
export class TopBarComponent implements OnInit{

  public items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Schedule',
        routerLink: '/schedule',
        routerLinkActiveOptions: {exact: false}
      },
      {
        label: 'Employee',
        routerLink: '/employees',
        routerLinkActiveOptions: {exact: false},
        items: [
          {
            label: 'Employee',
            routerLink: '/employees',
            routerLinkActiveOptions: {exact: false}
          },
          {
            label: 'Employee Type',
            routerLink: '/employees/types',
            routerLinkActiveOptions: {exact: false}
          }
        ]
      },
      {
        label: 'Booking',
        routerLink: '/booking',
        routerLinkActiveOptions: {exact: false}
      },
      {
        label: 'Customer',
        routerLink: '/customer',
        routerLinkActiveOptions: {exact: false}
      },
      {
        label: 'Service',
        routerLink: '/service',
        routerLinkActiveOptions: {exact: false}
      },
      {
        label: 'Inventory',
        routerLink: '/inventory',
        routerLinkActiveOptions: {exact: false}
      },
      {
        label: 'Reports',
        routerLink: '/reports',
        routerLinkActiveOptions: {exact: false}
      },
      {
        label: 'Maintenance',
        routerLink: '/maintenance',
        routerLinkActiveOptions: {exact: false}
      }
    ]
  }


}
