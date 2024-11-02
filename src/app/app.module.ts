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

@NgModule({
  declarations: [
    AppComponent,
    LanguageControlComponent,
    SomethingThatEmmitsComponent,
    SomethingThatListensComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    NgxTranslateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
