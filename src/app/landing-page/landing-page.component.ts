import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { DoctorLoginComponent} from '../doctor-login/doctor-login.component';
import { PatientLoginComponent } from '../patient-login/patient-login.component';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DoctorLoginComponent);

  }

  openPatient(){
    const dialogRefer = this.dialog.open(PatientLoginComponent);
  }
  ngOnInit() {
  }

}
