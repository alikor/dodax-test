import { OpenWeatherMapCityFactory, City } from './City';


describe('OpenWeatherMapCityFactory', () => {
    let openWeatherMapCityFactory: OpenWeatherMapCityFactory;
    beforeEach(() => {
        openWeatherMapCityFactory = new OpenWeatherMapCityFactory();
    });

    it('should create instance', () => {
        expect(openWeatherMapCityFactory).toBeTruthy();
    });

});