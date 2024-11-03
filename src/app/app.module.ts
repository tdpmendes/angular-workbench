import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageControlComponent } from './language-control/language-control.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxTranslateModule } from './tranlsate/tranlsate.module';
import { SomethingThatEmmitsComponent } from './something-that-emmits/something-that-emmits.component';
import { SomethingThatListensComponent } from './something-that-listens/something-that-listens.component';
import { SomeComponentComponent } from './some-component/some-component.component';
import { SomeOtherComponentComponent } from './some-other-component/some-other-component.component';
import { PdfMakeExampleComponent } from './pdf-make-example/pdf-make-example.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomInputComponent } from "./custom-input/custom-input.component";
import { FormsModule } from '@angular/forms';
import { CustomSelectComponent } from "./custom-select/custom-select.component";
import { CustomDatePickerComponent } from "./custom-date-picker/custom-date-picker.component";


@NgModule({
  declarations: [
    AppComponent,
    LanguageControlComponent,
    SomethingThatEmmitsComponent,
    SomethingThatListensComponent,
    SomeComponentComponent,
    SomeOtherComponentComponent,
    PdfMakeExampleComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    NgxTranslateModule,
    FormsModule,
    CustomInputComponent,
    CustomSelectComponent,
    CustomDatePickerComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
