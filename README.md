# DodaxTest

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)
```bash
npm install -g @angular/cli
```

## Install all project dependencies

Run the following command within the root of this project

```bash
npm install
```

## Obtain a openweathermap.com API KEY 

You will need to register for an account before being given a API Key

[Generate API Key](https://home.openweathermap.org/api_keys)


## Update APIID in config

[APIConfig.ts](./APIConfig.ts) file can be located within the root of the project please set the api key that was obtained in the previous step

## Launch development server

Run `ng serve` for a dev server. Navigate to [`http://localhost:4200/`](http://localhost:4200/).

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
