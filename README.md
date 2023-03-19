# Netflex

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Production

https://razisraeli.github.io/netflex/

## App Description

This app was developed by following this video on YouTube: https://www.youtube.com/watch?v=H9z8jttAlRU, and making small changes according to my decisions where needed.

A netflix based app where I use the movie db API to fetch movies and cast data and present to the user.
App abilities:
- Search for a movie by title
- Review the newest/trending movies
- Review movies by genre

## Tech Stack
Angular 15.0.4,
Angular router,
Typescript,
RxJS,
HTML,
SCSS

## Todo

  - In the movie service, generalize the "get<genre>movies" to pass a parameter that will fetch the desired genre (rather than having a function per genre).
  - Im the home page, create a reusable component and use it multiple times rather than write the HTML of each component genre (e.g action movies, adventure movies, and so on....).

