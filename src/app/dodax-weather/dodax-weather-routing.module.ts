import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DodaxWeatherComponent } from './dodax-weather.component';
import { ForecastComponent } from './forecast/forecast.component';

const childrenRoutes: Routes = [
  { path: '', redirectTo: "list"  },
  { path: 'forecast/:id', component: ForecastComponent }
];


const routes: Routes = [
  { path: '', component: DodaxWeatherComponent, children: childrenRoutes }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DodaxWeatherRoutingModule { }
