import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {environment} from '../environments/environment';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PointsOfAttentionService } from './points-of-attention.service';
import { MockXHRBackend } from './mock-xhr-backend';
import { PaCategoryComponent } from './pa-category/pa-category.component';

@NgModule({
  declarations: [
    AppComponent,
    PaCategoryComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapsAPIKey
    }),
    HttpClientModule,
    MatTooltipModule,
    BrowserAnimationsModule
  ],
  providers: [
     PointsOfAttentionService,
     { provide: HttpXhrBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
