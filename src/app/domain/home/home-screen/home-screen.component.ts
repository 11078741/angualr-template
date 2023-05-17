import {Component, OnInit} from '@angular/core';
import {panelItems} from "../../../shared/dummy-data";

export interface panelItem {
  label: string;
  imageSrc: string;
  routerLink: string;
}

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  public panelItems: panelItem[];

  ngOnInit(): void {
    this.panelItems = panelItems;
  }

}
