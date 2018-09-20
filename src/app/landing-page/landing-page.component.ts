
import { Component, OnInit } from '@angular/core';
import { PatientLoginComponent } from '../patient-login/patient-login.component';
import {MatDialog} from '@angular/material';
import {DoctorLoginComponent} from '../doctor-login/doctor-login.component';
import * as $ from 'jquery';
import { Doctor } from '../Doctor';
import  {DoctorService} from '../doctor.service';
import{ Router,NavigationExtras} from '@angular/router';
import { DoctorTokenStorage } from '../doctorTokenStorage';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  
  doctor:Doctor;
  doctor1:Doctor;
  docName;
  doctorName;
  constructor(public dialog : MatDialog,private doctorService:DoctorService,private router: Router,private docNameObj:DoctorTokenStorage) { 
    this.doctor=new Doctor();
    this.doctor1=new Doctor();
  }

  ngOnInit() {
      this.docNameObj.removedoctorName();

  }

  searchDoctors(name:string)
  {

    console.log(name);

    this.docNameObj.saveDoctorName(name);
    console.log(this.doctorName);
    console.log(this.docNameObj.getDoctorName());
    //     return this.doctorService.getDoctorByDoctorName(name).subscribe(data => {
    //   this.doctor1=data;
    //   console.log(name);

    // console.log(data);
    // console.log(this.doctor.doctorName)
    //       console.log(name);
    
    this.router.navigate(['search-doctor']);

    // return this.doctorService.getDoctorByDoctorName(name).subscribe((data1:Doctor[]) => { this.doctorList=data1; console.log(data1)});
  


  }

    //this.docName=name;


  openPatient():void{
    const dialogRef = this.dialog.open(PatientLoginComponent);

    dialogRef.afterClosed().subscribe(data => console.log("the dailog box is closed"));
  }
  loc;

  openDialog() {
    const dialogRef = this.dialog.open(DoctorLoginComponent);
 
  }
  getLocation() {
    var x = document.getElementById('output');
    var locApi = "http://api.ipstack.com/180.151.35.146?access_key=c0bf349832d1dacf74b5fb62feca0460";


    $.get({
      url: locApi,
      success: function (data) {
        console.log(data);
        x.innerHTML=data.city +","+data.region_name;
        $("#output").val(data.city +","+data.region_name);

        this.loc=data.city +","+data.region_name;
  
      }
    });
  }
  
  
  

}