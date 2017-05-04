import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { DodaxWeatherRoutingModule } from './dodax-weather-routing.module';
import { DodaxWeatherComponent } from './dodax-weather.component';
import { ForecastComponent } from './forecast/forecast.component';

import { DodaxWeatherConfigService } from './dodax-weather-config.service';
import { OpenWeatherMapService } from './open-weather-map.service';

import { OpenWeatherMapCityFactory, OpenWeatherMapWeatherFactory } from './viewModels'


import {APIConfig } from '../../../APIConfig'



@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    DodaxWeatherRoutingModule
  ],
  declarations: [DodaxWeatherComponent, ForecastComponent],
  providers: [APIConfig, DodaxWeatherConfigService, OpenWeatherMapService, OpenWeatherMapCityFactory, OpenWeatherMapWeatherFactory]
})
export class DodaxWeatherModule { }
