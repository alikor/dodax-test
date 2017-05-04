import { Component, OnInit } from '@angular/core';
import { DodaxWeatherConfigService, CityConfig  } from './dodax-weather-config.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './dodax-weather.component.html',
  styleUrls: ['./dodax-weather.component.scss']
})
export class DodaxWeatherComponent implements OnInit {
  cities: CityConfig[];
  constructor(
    private weatherConfigService: DodaxWeatherConfigService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.cities = this.weatherConfigService.getCitites();
    if(this.route.snapshot.params['id'] === undefined) {
      this.router.navigate(['forecast', this.cities[0].name], {relativeTo: this.route });
    }
  }
}
