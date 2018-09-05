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
import { DocterLoginComponent } from './docter-login/docter-login.component';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PatientLoginComponent,
    DocterLoginComponent
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatListModule,
    MaterialModule,
    MatGridListModule,
    MatTooltipModule,
    MatMenuModule

  ],
  entryComponents:[PatientLoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
