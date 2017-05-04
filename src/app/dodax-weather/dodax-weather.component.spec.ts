/* tslint:disable:no-unused-variable */
import { DodaxWeatherComponent } from './dodax-weather.component';

import { DodaxWeatherConfigService } from './dodax-weather-config.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, UrlSegment } from '@angular/router';

describe('DodaxWeatherComponent', () => {
  let weatherConfigService: DodaxWeatherConfigService;
  let component: DodaxWeatherComponent;
  let router: Router;
  let route: ActivatedRoute;

  describe('ngOnInit called on root component', () => {
    beforeEach(() => {
      weatherConfigService = new DodaxWeatherConfigService();
      router = <Router>{
        navigate: function (args: string[], object: any) {
        }
      };

      route = <ActivatedRoute> {
        snapshot: jasmine.createSpyObj<ActivatedRouteSnapshot>("snapshot", ['params'])
      };

      spyOn(router, "navigate")
      component = new DodaxWeatherComponent(weatherConfigService, router, route);
    });

    it('should redirect to first city within the weather config', () => {
      component.ngOnInit();
      expect(router.navigate).toHaveBeenCalledWith(['forecast', "London"], {relativeTo: route })
    });

  });

  describe('ngOnInit called on child component', () => {
    beforeEach(() => {
      weatherConfigService = new DodaxWeatherConfigService();
      router = <Router>{
        navigate: function (args: string[], object: any) {
        }
      };

      route = <ActivatedRoute> {
        snapshot: jasmine.createSpyObj<ActivatedRouteSnapshot>("snapshot", ['params'])
      };

      route.snapshot.params = {
        "id": "London"
      };

      spyOn(route, "snapshot" )

      spyOn(router, "navigate")
      component = new DodaxWeatherComponent(weatherConfigService, router, route);
    });

    it('should not redirect', () => {
      component.ngOnInit();
      expect(router.navigate).not.toHaveBeenCalledWith(['forecast', "London"], {relativeTo: route })
    });

  });
});
