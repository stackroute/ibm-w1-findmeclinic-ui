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
import {MatSelectModule} from '@angular/material/select';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';



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

import {MatDatepickerModule} from '@angular/material/datepicker';
import{ MatNativeDateModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatPaginatorModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { AppRoutingModule } from './app-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { InvalidPatientComponent } from './patient-login/invalid-patient.component';
import { InvalidDoctorComponent } from './doctor-login/invalid-doctor.component';
import { FailRegisterComponent} from './doctor-login/fail-register.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { PatientUpdateComponent} from './patient-profile/patientupdate.component';
import { MedicalRecordsComponent } from './medical-records/medical-records.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { BookComponentComponent } from './book-component/book-component.component';
import { BookConfirmComponent } from './book-confirm/book-confirm.component';
import { NotificationComponent } from './notification/notification.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';

import { SlotDetailsComponent } from './slot-details/slot-details.component';
import { PatientappointmentComponent } from './patientappointment/patientappointment.component';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';
import { AddressComponent } from './address/address.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PatientLoginComponent,
    DoctorLoginComponent,
    PatientProfileComponent,
    PatientUpdateComponent,
    DoctorProfileComponent,
    CalendarComponent,InvalidPatientComponent,
    InvalidDoctorComponent,
    FailRegisterComponent,
    FailPatientComponent,
    PatientUpdateComponent,
    AppointmentComponent,
    PrescriptionsComponent,
    MedicalRecordsComponent,
    AddScheduleComponent,
    SearchDoctorComponent,
    BookComponentComponent,
    BookConfirmComponent,
    NotificationComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent,
    SlotDetailsComponent,
    AddressComponent,
    PatientappointmentComponent,
    PrescriptionListComponent
  ],
  imports: [
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatListModule,
    BrowserModule,
    MatDatepickerModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSelectModule,
    MatGridListModule,
    MatMenuModule,
    MatListModule,
    Ng4GeoautocompleteModule.forRoot(),
    MatPaginatorModule,
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
  entryComponents:[PatientLoginComponent,InvalidPatientComponent,FailPatientComponent,PatientUpdateComponent,InvalidDoctorComponent,FailRegisterComponent,
  DoctorLoginComponent,DoctorProfileComponent,MedicalRecordsComponent,PatientUpdateComponent, AddScheduleComponent,PrescriptionsComponent,BookConfirmComponent,DetailsUploadComponent,FormUploadComponent,ListUploadComponent],
  providers: [AddScheduleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
