import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';

import { RouterModule, Routes } from '@angular/router';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { CalendarComponent} from './calendar/calendar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  { path:'', redirectTo:'/landing-page', pathMatch:'full'},
  { path:'landing-page', component: LandingPageComponent},
  { path:'patient-profile', component: PatientProfileComponent},
  { path:'doctor-profile', component: DoctorProfileComponent},
  { path:'doctor-appointment', component: CalendarComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
