import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './calendar/calendar.component';
import { MaterialModule } from  './material';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PatientLoginComponent,
    DoctorLoginComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  entryComponents:[PatientLoginComponent,
  DoctorLoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
