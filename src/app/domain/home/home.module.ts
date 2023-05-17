import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import {ImageModule} from "primeng/image";


@NgModule({
  declarations: [
    HomeScreenComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ImageModule
    ]
})
export class HomeModule { }
