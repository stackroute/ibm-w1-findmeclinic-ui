import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule,MatListModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';


//Calendar Modules for Calendar Component
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertsModule } from 'angular-alert-module';



import { MaterialModule } from  './material';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FailPatientComponent } from './patient-login/fail-patient.component';

import { RouterModule } from '@angular/router';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { AppRoutingModule } from './/app-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { InvalidPatientComponent } from './patient-login/invalid-patient.component';
import { InvalidDoctorComponent } from './doctor-login/invalid-doctor.component';
import { FailRegisterComponent} from './doctor-login/fail-register.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PatientLoginComponent,
    DoctorLoginComponent,
    PatientProfileComponent,
    DoctorProfileComponent,
    CalendarComponent,InvalidPatientComponent,
    InvalidDoctorComponent,
    FailRegisterComponent,

    FailPatientComponent
  ],
  imports: [
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatListModule,
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,

    MatGridListModule,
    MatMenuModule,
    MatListModule,

    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,

    RouterModule,
    MatGridListModule,

    RouterModule,
    MatGridListModule,
//For calendar
    NgbModalModule,
   FlatpickrModule.forRoot(),
   AlertsModule.forRoot(),
   CalendarModule.forRoot({
     provide: DateAdapter,
     useFactory: adapterFactory
   })
  ],
  entryComponents:[PatientLoginComponent,InvalidPatientComponent,FailPatientComponent,InvalidDoctorComponent,FailRegisterComponent,
  DoctorLoginComponent,DoctorProfileComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
