# StarwarsFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.1.

* The frontend app makes a single API request (by passing person ID) to the NodeJS /ExpressJS backend and displays the information on people from the Star Wars universe

## Features developed

Services and Dependency Injections
* A common module for components/services used by multiple routes - `MaterialModule`
* RxJS & Async Pipes to load data - Async pipe used to load data in `CharacterDetailsComponent` and rxjs in `StarwarsService`
* NgModules & Lazy Loading - `AppModule` -> eagerly loaded and `StarwarsModule` -> lazy loaded
* Presentational and Smart Components - `CharactersComponent`, `AppComponent` -> Presentational Component and `CharacterDetailsComponent`-> Smart Component
* SCSS -> SCSS used for all styling. 
* Additionally, the layout has a header and footer section to resemble a standard webpage. The Redspace logo in the header was created using CSS.

## Deployed Application URL

[1] Frontend: Deployed using AWS Amplify
    [a] Landing Page: https://master.d1pjf0xo8r678k.amplifyapp.com/  
    [b] Star Wars Page: https://master.d1pjf0xo8r678k.amplifyapp.com/people
[2] Backend: Deployed using Google Cloud Platform - Google Cloud Run
    [a] Base Url: https://server-5rtj3t4uua-uc.a.run.app
    [b] Get API: https://server-5rtj3t4uua-uc.a.run.app/api/starwars/people/1

## Github URL
Repository URL: https://github.com/rashmiChandy/redspace

## To run locally

[1] Run `npm install` to install the dependencies required to run the project

[2] Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

[3] Make sure the backend server is running by using `npm start` or `node index.js` command in the root directory which has the package.json file . If the backend server is running locally change API url as apiUrl:'http://localhost:8080/api' in environent files else use deployed url.

## Versions used to create the application
* Angular CLI: 13.1.2
* Node: 16.13.1
* Package Manager: npm 8.3.0

## Libraries used
[1] Angular Material - UI components
[2] Flex Module - Layout