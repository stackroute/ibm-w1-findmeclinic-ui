import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';

import { RouterModule, Routes } from '@angular/router';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { CalendarComponent} from './calendar/calendar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import {MedicalRecordsComponent} from './medical-records/medical-records.component'
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { BookComponentComponent } from './book-component/book-component.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

const routes: Routes = [
  { path:'', redirectTo:'/landing-page', pathMatch:'full'},
  { path:'landing-page', component: LandingPageComponent},
  { path:'patient-profile', component: PatientProfileComponent},
  { path:'doctor-profile', component: DoctorProfileComponent},
  { path:'doctor-appointment', component: CalendarComponent},
  { path:'view-appointment', component: AppointmentComponent},
  { path: 'add-prescription', component: PrescriptionsComponent},
  { path:'medical-records', component: MedicalRecordsComponent},
  { path:'search-doctor',component:SearchDoctorComponent},
  { path:'book', component: BookComponentComponent},
  { path:'upload-file', component:UploadFileComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
