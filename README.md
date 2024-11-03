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

## Translation mechanism with ngx-translate

1. run this command to install the required library for this component: `npm install @ngx-tranlsate/core`

this is just for us to be able to grab the translation json with an ajax call if needed
`npm install @ngx-translate/http-loader`

also bootstrap for neat css
`ng add ngx-bootstrap`

2. Then, for isolation purposes we'll create a separate module for translation
`ng g m translate`

Check the content for that module on translate.module.ts, just copy paste the whole thing

3. As for the translation files they should be put on a json on the path src/assets/i18n/

4. Check language-control to see the implementation for the component that changes the language

5. For the flags, do this:

`npm install flag-icon-css`

add this entry to your "styles":[] on angular.json

`"node_modules/flag-icon-css/css/flag-icons.min.css"`

then on your "development": {} settings, add this entry:

`"outputHashing":"media"`

if you don't angular will try to put files that have the same name on the folders 1x1 and 4x3 on the same output folder after angular does it's thing when starting the app, and it will crash.

## Communication between a child component and it's parent

In this example i created a small thing to demonstrate how a child component can communicate (and pass messages) to a (an imediate) parent component.

We have, something that emmits, which is the child, and something that listens, which is the parent component.
The parent component, contains a child component (be aware that we're not taking about inheritance here)

The child component, has a button, that emmits an event to a parent component, and exposes an output event that can be bound via the @Output() annotation.

When you click the button on the child component, it emmits an event that will be listened by something that listens, and it will output the structure for the event on the console log. 

This is how you can have a child component communicate with a parent component!

To have a parent child communication you do it like this:

1. You need to have an @Input() on a child component, which is the model or event you want to bind to

2. On the parent component you do [model]="propertyFromParent" when you place the child component on the parent component's html structure. It's really that simple.

3. Be aware that: if you set the data on the parent, you can do so at the constructor, because it happens before all the angular component construction pipeline. On the child you can access the data on the OnInit method, because at this point the data passed will be available on the child event.

## Communication between components that are not part of the same hierarchical structure (via an eventBus)

In this example we have some component, and some other component. To make it so that they are able to pass messages between each other, we can do so by using the Observer/observed Design Pattern. I've created an eventBus.service.ts which is an "universal" form to enable 2 components to communicate. You might want to do this is in a more better typed fashion, for example, having a separate class for Event, with some parameter so that everybody subscribing can filter and treat only events of a certain type, etc. I might update this repository in the future with a typed event bus (or something)

So what you do is this: On the component from where you want to send the message from, you will inject eventBusService on the constructor. Then you create a method to send the event. The event bus i've created will send a message by the set() method.

On the component where you want to listen to the event, you also inject the service, and, on the constructor (or init, does it make a difference? honest question) you will subscribe to that event, do a null check, and treat the event when it's not null. This is the point where you might want to filter the event (by type or anything) and handle the event!

## Using PDFMake on Angular

So first we'll install not only pdfmake but it's types (for typescript) so we go;

`npm install pdfmake`
`npm install @types/pdfmake`

Now, we can use PDFMake with some helpful classes and interfaces, which is gr8.

Then, on the component where we want to print the pdf, we will need some imports and some reference changes, as seen on pdf-make-example.component:

```
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.fonts = pdfFonts.pdfMake;
```
Something i like to do as a good pratice is to isolate the document definition on a separate file.

After that, check the pdf-make-example and check the printPdf() method, and you should be set :D

## Bootstrap and angular

First let's install a few things:
`npm install bootstrap bootstrap-icons`
`npm install @ng-bootstrap/ng-bootstrap`
`npm install ngx-bootstrap`

And we add these entries to angular.json files:
```
    "styles": [
        "node_modules/bootstrap/dist/css/bootstrap.css"
        ,"node_modules/bootstrap-icons/font/bootstrap-icons.css"
    ],
    "scripts": [
        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
    ]
```
As an extra we can add some imports to our app.module.ts:

```
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

imports: [
  BrowserModule,
  NgbModule,
  AppRoutingModule,
],
```

## Some custom components i've done

I have implemented a custom datepicker, input and select with some validation logic check app-component.html to see how to use it