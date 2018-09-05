import { Component, OnInit } from '@angular/core';
import { PatientLoginComponent } from '../patient-login/patient-login.component';
import {MatDialog} from '@angular/material';
<<<<<<< HEAD
=======
import {DoctorLoginComponent} from '../doctor-login/doctor-login.component';
>>>>>>> da712295947f1b8de047440eaa4a9ef04bd6f8a8

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
