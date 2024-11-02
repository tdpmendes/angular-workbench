# AngularWorkbench

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Translation mechanism with NGX-Translate

# 1
run this command to install the required library for this component:
`npm install @ngx-tranlsate/core`

this is just for us to be able to grab the translation json with an ajax call if needed
`npm install @ngx-translate/http-loader`

also bootstrap for neat css
`ng add ngx-bootstrap`

# 2 
Then, for isolation purposes we'll create a separate module for translation
`ng g m translate`

Check the content for that module on translate.module.ts, just copy paste the whole thing

# 3 
As for the translation files they should be put on a json on the path src/assets/i18n/

# 4
Check language-control to see the implementation for the component that changes the language

# 5
For the flags, do this:

`npm install flag-icon-css`

add this entry to your "styles"[] on angular.json

`"node_modules/flag-icon-css/css/flag-icons.min.css"`

then on your "development": {} settings, add this entry:

`"outputHashing":"media"`

if you don't angular will try to put files that have the same name on the folders 1x1 and 4x3 on the same output folder after angular does it's thing when starting the app, and it will crash.





