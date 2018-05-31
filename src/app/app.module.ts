import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {environment} from '../environments/environment';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PointsOfAttentionService } from './points-of-attention.service';
import { MockXHRBackend } from './mock-xhr-backend';

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
    }),
    HttpClientModule
  ],
  providers: [
     PointsOfAttentionService,
     { provide: HttpXhrBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
