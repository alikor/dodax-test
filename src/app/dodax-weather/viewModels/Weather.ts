const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    ]

export class Weather {
    constructor(
        readonly date: Date,
        readonly maxTemperature: string,
        readonly minTemperature: string,
        readonly iconUrl: string
    ) {
    }

    getDayOfWeek(): String {
        return weekdays[this.date.getDay()];
    }
}

export interface WeatherFactory {
    Create(input: any) : Weather;
}

export class OpenWeatherMapWeatherFactory implements WeatherFactory {
    Create(input: any) : Weather {
        const date = new Date(+(input.dt)*1000);
        const iconUrl = `http://openweathermap.org/img/w/${input.weather[0].icon}.png`;
        return new Weather(date, input.temp.max, input.temp.min, iconUrl);
    }
}