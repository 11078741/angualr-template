import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BreadcrumbComponent} from './shared/components/layout/breadcrumb/breadcrumb.component';
import {TopBarComponent} from './shared/components/layout/top-bar/top-bar.component';
import {GenericDataTableComponent} from './shared/components/generic-data-table/generic-data-table.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BreadcrumbComponent,
    TopBarComponent,
    GenericDataTableComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
