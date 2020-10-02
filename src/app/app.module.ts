import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountryComponent } from './country/country.component';
import AppRouting from './app.routing';
import { NavComponent } from './nav/nav.component'
import { FormsModule } from '@angular/forms';
import { CountryDataComponent } from './country-data/country-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CountryComponent,
    NavComponent,
    CountryDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
