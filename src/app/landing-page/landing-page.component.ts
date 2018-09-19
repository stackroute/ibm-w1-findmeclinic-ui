import { Component, OnInit } from '@angular/core';
import { PatientLoginComponent } from '../patient-login/patient-login.component';
import {MatDialog} from '@angular/material';
import {DoctorLoginComponent} from '../doctor-login/doctor-login.component';
import * as $ from 'jquery';


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
  getLocation() {
    var x = document.getElementById('output');
    var locApi = "http://api.ipstack.com/180.151.35.146?access_key=c0bf349832d1dacf74b5fb62feca0460";


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
      x.innerHTML="Supporting";

    }
    else {
      x.innerHTML = "Browser not supported";
    }

  }
  showPosition(position) {
    var x = document.getElementById('output');

    // x.innerHTML="latitude"+position.coords.latitude+" "+"longitude"+position.coords.longitude;
    var locApi = "http://api.ipstack.com/180.151.35.146?access_key=c0bf349832d1dacf74b5fb62feca0460";
    $.get({
      url: locApi,
      success: function (data) {
        console.log(data);
        x.innerHTML=data.city +","+data.region_name;
  
      }
    });
   
  }
  
  

}
