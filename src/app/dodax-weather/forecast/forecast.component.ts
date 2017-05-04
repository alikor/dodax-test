import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { DodaxWeatherConfigService } from '../dodax-weather-config.service';
import { OpenWeatherMapService } from '../open-weather-map.service';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { City, OpenWeatherMapCityFactory, Weather, OpenWeatherMapWeatherFactory } from '../viewModels'


@Component({
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  city: City;
  weather: Weather[];
  constructor(
    private weatherConfigService: DodaxWeatherConfigService, 
    private openWeatherMapService: OpenWeatherMapService,
    private openWeatherMapCityFactory: OpenWeatherMapCityFactory,
    private openWeatherMapWeatherFactory: OpenWeatherMapWeatherFactory,
    private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.params
      .switchMap((params: Params) => this.updateWeather(params))
      .subscribe(r => 
      {
        this.city = this.openWeatherMapCityFactory.Create(r.city);
        this.weather = r.list.map(this.openWeatherMapWeatherFactory.Create);

        console.log(this.city);
      });

  }

  private getDayOfWeek(index) : string  {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[index];
  }

  private updateWeather(params: Params) : Observable<any> {
    var city = this.weatherConfigService.getCitites().find(c => c.name === params['id'])
    return this.openWeatherMapService.getWeatherFor(city.name, city.country);
  }
}
