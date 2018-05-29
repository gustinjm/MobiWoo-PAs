import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {environment} from '../environments/environment';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
       CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapsAPIKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
