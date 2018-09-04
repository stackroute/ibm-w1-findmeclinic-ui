import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { MaterialModule } from  './material';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { DocterLoginComponent } from './docter-login/docter-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PatientLoginComponent,
    DocterLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents:[PatientLoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
