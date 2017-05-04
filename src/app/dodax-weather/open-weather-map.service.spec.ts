/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule, BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';

import { MockBackend } from '@angular/http/testing';

import { OpenWeatherMapService } from './open-weather-map.service';
import {APIConfig } from '../../../APIConfig'


describe('OpenWeatherMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        OpenWeatherMapService,
        MockBackend,
        APIConfig,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }

        ]
    });
  });

  it('should ...', async( inject([OpenWeatherMapService, MockBackend], (service: OpenWeatherMapService, backend: MockBackend) => {
    expect(service).toBeDefined();
  })));

  describe("getWeatherFor", () => {
    
  });
});
