import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { CountryComponent } from './country/country.component'

const trackerRoute: Routes = [
    { path: "", component: DashboardComponent },
    { path: "country", component: CountryComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(trackerRoute)],
    exports: [RouterModule]
})
export default class AppRouting { }