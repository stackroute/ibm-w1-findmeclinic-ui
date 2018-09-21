
import { Component, OnInit } from '@angular/core';
import { PatientLoginComponent } from '../patient-login/patient-login.component';
import {MatDialog} from '@angular/material';
import {DoctorLoginComponent} from '../doctor-login/doctor-login.component';
import { Doctor } from '../Doctor';
import  {DoctorService} from '../doctor.service';
import{ Router,NavigationExtras} from '@angular/router';
import * as SockJS from 'sockjs-client';
import * as Stomp from '@stomp/stompjs';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  
  doctor:Doctor;
  doctor1:Doctor;
  docName: string ='';
  constructor(public dialog : MatDialog,private doctorService:DoctorService,private router: Router) { 
    this.doctor=new Doctor();
    this.doctor1=new Doctor();
  }

  ngOnInit() {
    this.setUpConnection()
  }
  // searchDoctors(name:string)
  // {
  //   this.docName=name;
  //   return this.doctorService.getDoctorByDoctorName(name).subscribe(data => {
  //     this.doctor1=data;
  //     console.log(name);

  //   console.log(data);
  //   this.router.navigate(['search-doctor'])
  // });


  // }

    //this.docName=name;


  openPatient():void{
    const dialogRef = this.dialog.open(PatientLoginComponent);

    dialogRef.afterClosed().subscribe(data => console.log("the dailog box is closed"));
  }
  loc;

  openDialog() {
    const dialogRef = this.dialog.open(DoctorLoginComponent);
 
  }
  // getLocation() {
  //   var x = document.getElementById('output');
  //   var locApi = "http://api.ipstack.com/180.151.35.146?access_key=c0bf349832d1dacf74b5fb62feca0460";


  //   $.get({
  //     url: locApi,
  //     success: function (data) {
  //       console.log(data);
  //       x.innerHTML=data.city +","+data.region_name;
  //       $("#output").val(data.city +","+data.region_name);

  //       this.loc=data.city +","+data.region_name;
  
  //     }
  //   });
  // }
  

  private stompClient;
  name: string;
  
   public setUpConnection() {
      console.log('hii')
      let socket = new SockJS('http://localhost:8080/socket');
      this.stompClient = Stomp.over(socket);
      let that = this;
      that.stompClient.connect({}, function (frame) {
          console.log('Connected: ' + frame);
          that.stompClient.subscribe('/topic/getList', function (data) {
              console.log(data);
              JSON.parse(data.body).content;
          });
      });
  }

  sendName(name: any){
    console.log(name);
    this.stompClient.send("/app/doc-name", {}, JSON.stringify(name));
  }

  sendData(){
    console.log(this.docName)
    this.doctorService.getDoctorByDoctorName(this.docName).subscribe(data => console.log(data))
  }
  
  

}
