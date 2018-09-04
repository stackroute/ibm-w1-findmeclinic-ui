import { Component, OnInit } from '@angular/core';
import { PatientLoginComponent } from '../patient-login/patient-login.component';
import {MatDialog} from '@angular/material';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  ngOnInit() {
  }

  openPatient(){
    const dialogRef = this.dialog.open(PatientLoginComponent);
  }

}
