import { Injectable } from '@angular/core';

@Injectable()
export class DodaxWeatherConfigService {

  constructor() { }
  getCitites(): CityConfig[] {
    return <CityConfig[]>[
      { name: 'London', country: "GB" },
      { name: 'New York', country: "US" },
      { name: 'Hong Kong', country: "HK" }
    ];
  }
}


export class CityConfig {
  name: string;
  country: string;
}