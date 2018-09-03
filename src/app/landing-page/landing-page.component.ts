import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { DoctorLoginComponent} from '../doctor-login/doctor-login.component';
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
  ngOnInit() {
  }

}
