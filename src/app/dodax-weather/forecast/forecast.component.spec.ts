/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, UrlSegment } from '@angular/router';


import { ForecastComponent } from './forecast.component';

import { DodaxWeatherConfigService, CityConfig } from '../dodax-weather-config.service';
import { OpenWeatherMapService } from '../open-weather-map.service';
import { City, OpenWeatherMapCityFactory, Weather, OpenWeatherMapWeatherFactory } from '../viewModels'



describe('ForecastComponent', () => {
  let cities: CityConfig[] = [
    { name:"city1", country: 'c1' },
    { name:"city2", country: 'c2' }
  ] 
  let component: ForecastComponent;
  let weatherConfigService: DodaxWeatherConfigService = <DodaxWeatherConfigService> {
    getCitites: () => {
      return cities;
    }
  };
  let openWeatherMapService: OpenWeatherMapService;
  let openWeatherMapCityFactory: OpenWeatherMapCityFactory;
  let openWeatherMapWeatherFactory: OpenWeatherMapWeatherFactory;
  let route: ActivatedRoute;

  beforeEach(() => {
    weatherConfigService = jasmine.createSpyObj<DodaxWeatherConfigService>("weatherConfigService", ['getCitites']);
    openWeatherMapService = jasmine.createSpyObj<OpenWeatherMapService>("openWeatherMapService", ['getWeatherFor'])
    openWeatherMapCityFactory = jasmine.createSpyObj<OpenWeatherMapCityFactory>("openWeatherMapCityFactory", ['Create'])
    openWeatherMapWeatherFactory = jasmine.createSpyObj<OpenWeatherMapWeatherFactory>("openWeatherMapWeatherFactory", ['Create'])
    route = jasmine.createSpyObj<ActivatedRoute>("route", ['Params'])

    component = new ForecastComponent(weatherConfigService, openWeatherMapService, openWeatherMapCityFactory, openWeatherMapWeatherFactory, route);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
