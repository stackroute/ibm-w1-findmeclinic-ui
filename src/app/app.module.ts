import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule,MatListModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';




import { MaterialModule } from  './material';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';


import { RouterModule } from '@angular/router';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PatientLoginComponent,
    DoctorLoginComponent,
    PatientProfileComponent,
    DoctorProfileComponent
  ],
  imports: [
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatListModule,
    BrowserModule,
    MatIconModule,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    MatGridListModule,
    MatMenuModule,
    MatListModule,
=======
>>>>>>> 031c3b91bf685c046cab7f60bbd320db699f082e
>>>>>>> 09e37e66c6a02ba8224415a5873947fd2ea5c188
>>>>>>> 95139412b6141daa179efa4019dd4bcb21e54369
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
<<<<<<< HEAD
    RouterModule,
    MatGridListModule
=======
<<<<<<< HEAD
    RouterModule
<<<<<<< HEAD
=======
=======
    RouterModule,
    MatGridListModule
>>>>>>> 031c3b91bf685c046cab7f60bbd320db699f082e
>>>>>>> 09e37e66c6a02ba8224415a5873947fd2ea5c188
>>>>>>> 95139412b6141daa179efa4019dd4bcb21e54369
  ],
  entryComponents:[PatientLoginComponent,
  DoctorLoginComponent,DoctorProfileComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
