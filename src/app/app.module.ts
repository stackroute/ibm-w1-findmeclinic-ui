import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { MaterialModule } from './material';
import { PatientLoginComponent } from './patient-login/patient-login.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DoctorLoginComponent,
    PatientLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
   
  ],
  entryComponents: [
    DoctorLoginComponent,
    PatientLoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
