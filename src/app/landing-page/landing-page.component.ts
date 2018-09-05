import { Component, OnInit } from '@angular/core';
import { PatientLoginComponent } from '../patient-login/patient-login.component';
import {MatDialog} from '@angular/material';
import {DoctorLoginComponent} from '../doctor-login/doctor-login.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  

  constructor(public dialog : MatDialog) { }

  ngOnInit() {
  }

  openPatient():void{
    const dialogRef = this.dialog.open(PatientLoginComponent);

    dialogRef.afterClosed().subscribe(data => console.log("the dailog box is closed"));
  }

  openDialog() {
    const dialogRef = this.dialog.open(DoctorLoginComponent);
 
  }

}
