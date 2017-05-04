/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DodaxWeatherConfigService } from './dodax-weather-config.service';


describe('DodaxWeatherConfigService', () => {
  describe('DodaxWeatherConfigService', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [DodaxWeatherConfigService]
      });
    });

    it('should ...', inject([DodaxWeatherConfigService], (service: DodaxWeatherConfigService) => {
      expect(service).toBeTruthy();
    }));

    describe("getCitites", () => {
      it('should ...', inject([DodaxWeatherConfigService], (service: DodaxWeatherConfigService) => {
        var cities = service.getCitites();
        expect(cities.length).toBe(3)
      }));
    });
  });
});