<p align="center">
  <a href="https://github.com/mazurdev/angular-full-starter">
    <img src="https://raw.githubusercontent.com/mazurdev/angular-full-starter/master/meta-assets/angular-logo.png" alt="Angular Logo" width="96" height="96">
  </a>
  <h1 align="center">ANGULAR FULL STARTER</h1>
  <p align="center">Angular starter, which combines all the necessary components for writing a complete project</p>
  
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/mazurdev/angular-full-starter/master/meta-assets/preview.gif">
</p>

<p align="center">
   <a href="https://twitter.com/mazurdev"><img src="https://img.shields.io/badge/feedback-@mazurdev-blue.svg" /></a>
   <br>
   <sub>Check out my [blog-portfolio](https://mazurdev.com/)</sub>
</p>
  
## Table of Content

  * [Getting Started](#getting-started)
  * [Stack](#stack)
  * [Useful Commands](#useful-commands)
  * [Features](#features)
  * [License](#license)

## Getting started
```bash
1 - git clone https://github.com/mazurdev/angular-full-starter.git
2 - Go to "angular-full-starter" folder
3 - npm install
4 - Change the name of the project "angular-full-starter" to your in files: "angular.json", "package.json", "manifest.json" and "README.md"
5 - Change "baseUrl" variable in "environment.ts" and "environment.prod.ts"
6 - npm run start
```
> If need - [Update packages](#update-packages)

> If need Change application prefix on [this guide](https://medium.com/@kashifazmi94/change-prefix-of-component-in-angular-application-34c8d8a86dbf)

## Stack

  * Angular Tips & Tricks & Beast Practice
  * PWA (progressive web application)
  * Angular Universal (SSR + Prerender)
  * Maximum SEO
  * Maximum Performance
  * Maximum Responsive

## Useful Commands

#### Development
  * `npm run start` - starts a dev server and opens browser with running app
  * `npm run server:ssr` - dev server (SSR) 
  * `npm run serve:prerender` - dev server (PRERENDER)
 
#### Build
  * `npm run build` - development build
  * `npm run build:prod` - production build 
  * `npm run build:ssr` - production build (SSR) 
  * `npm run build:prerender` - production build (PRERENDER)

#### Others
  * `npm run build:stats` - generate webpack-bundle application
  * `npm run analyze` - analyze webpack-bundle application
  * `npm run check:https` - open the application by https

## Features

  * disable `tests`
  * `lazy-loading`
  * custom preloadStrategy
  * maximum responsive mixins
  * use `SharedModule` and `CoreModule`
  * present `base application URL`: "environment.ts" and "environment.prod.ts"
  * present modalComponent
  * present PWA for iOS
  * present `errorHandler`
  * present `seoService`
  * present `404` not-found page

## Add Universal + PWA (Addition)

```bash
npm i @ng-toolkit/universal
npm i @ng-toolkit/pwa
ng add ng-toolkit/universal
ng add @angular/pwa
ng add @ng-toolkit/pwa
```

## Update packages

```bash
npm update -g @angular/cli
ng update @angular/cli @angular/core
ng update @angular/material
ng update @nguniversal/common @nguniversal/express-engine @nguniversal/module-map-ngfactory-loader
ng update @ng-toolkit/universal @ng-toolkit/pwa @angular/pwa
ng update @ngrx/core @ngrx/effects @ngrx/router-store @ngrx/store @ngrx/store-devtools
```
> If need - update "material" (ng update @angular/material)

> If need - fix this (https://github.com/maciejtreder/ng-toolkit/issues/639)

## License

[MIT License](https://raw.githubusercontent.com/mazurdev/angular-full-starter/master/LICENSE)
