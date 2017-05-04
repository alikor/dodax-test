export class City {
    constructor(
        readonly name: string, 
        readonly country: string
        ) { }
}

export interface CityFactory {
    Create(input: any) : City;
}

export class OpenWeatherMapCityFactory implements CityFactory {
    Create(input: any) : City {
            console.log(input);

        return new City(input.name, input.country);
    }
}