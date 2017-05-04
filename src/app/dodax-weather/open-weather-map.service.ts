import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import {APIConfig } from '../../../APIConfig'

@Injectable()
export class OpenWeatherMapService {
  private weatherUrl: string = "http://api.openweathermap.org/data/2.5/forecast/daily";
  constructor(private http: Http, private apiConfig: APIConfig) { }

  private getOption(): RequestOptions {
    let headers: Headers = new Headers();
    headers.append(
      'content-type',
      'application/json; charset=utf-8');

    let opts = new RequestOptions({headers: headers});
    opts.headers = headers;

    return opts;
  }

  getWeatherFor(city: string, country: string): Observable<any> {
    const appid = this.apiConfig.APID;
    const url = `${this.weatherUrl}?q=${city},${country}&units=metric&cnt=3&appid=${appid}`;
    return this.http.get(url)
      .map((rest: Response) => {
        return rest.json();
      }, this.getOption());
  }

}
