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
<<<<<<< HEAD
import { DocterLoginComponent } from './docter-login/docter-login.component';
import {MatTooltipModule} from '@angular/material/tooltip';

=======
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';


import { RouterModule } from '@angular/router';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { AppRoutingModule } from './/app-routing.module';
>>>>>>> da712295947f1b8de047440eaa4a9ef04bd6f8a8

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
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    MatListModule,
    MaterialModule,
    MatGridListModule,
    MatTooltipModule,
    MatMenuModule

=======
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
>>>>>>> da712295947f1b8de047440eaa4a9ef04bd6f8a8
  ],
  entryComponents:[PatientLoginComponent,
  DoctorLoginComponent,DoctorProfileComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
