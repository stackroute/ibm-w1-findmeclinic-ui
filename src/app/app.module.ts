import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { MaterialModule } from  './material';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { DocterLoginComponent } from './docter-login/docter-login.component';

import { RouterModule } from '@angular/router';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  // const routes: Routes = [
  //   { path:'patient-profile', component: PatientProfileComponent}
  // ];
  declarations: [
    AppComponent,
    LandingPageComponent,
    PatientLoginComponent,
    DocterLoginComponent,
    PatientProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule
  ],
  entryComponents:[PatientLoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
