import { Component, OnInit } from '@angular/core';
import { PatientLoginComponent } from '../patient-login/patient-login.component';
import { MatDialog } from '@angular/material';
import { DoctorLoginComponent } from '../doctor-login/doctor-login.component';
import { Doctor } from '../Doctor';
import { DoctorService } from '../doctor.service';
import { Router, NavigationExtras } from '@angular/router';
import * as SockJS from 'sockjs-client';
import * as Stomp from '@stomp/stompjs';
import { DoctorTokenStorage } from '../doctorTokenStorage';
import { DoctorlistService } from '../doctorlist.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  ws: any;
  doctorData: Doctor[] = [];
  saveDoctor: Doctor[] = [];
  doctor: Doctor;
  doctor1: Doctor;
  docName: string = '';
  docNam;
  doctorLoc;
  data1: any;
  data2: any;
  requiredDoctor: Doctor;
  location: string;
  constructor(public dialog: MatDialog,
    private doctName: DoctorTokenStorage,
    private doctorService: DoctorService,
    private router: Router,
    private docNameObj: DoctorTokenStorage,
    public doctorList: DoctorlistService) {
    this.doctor = new Doctor();
    this.doctor1 = new Doctor();
  }

  ngOnInit() {
    this.setUpConnection();
  }



  openPatient(): void {
    const dialogRef = this.dialog.open(PatientLoginComponent);

    dialogRef.afterClosed().subscribe(data => console.log("the dailog box is closed"));
  }
  loc;

  onSign() {
    const dialogRef = this.dialog.open(PatientLoginComponent);

    dialogRef.afterClosed().subscribe(data => console.log("the dailog box is closed"));

  }

  openDialog() {
    const dialogRef = this.dialog.open(DoctorLoginComponent);

  }
  
  private stompClient;
  name: string;
  private serverurl = 'http://localhost:8080/socket/'

  setUpConnection(): any[] {
    let socket = new SockJS(this.serverurl);

    this.ws = Stomp.over(socket);
    let that = this;

    that.ws.connect(
      {},
      function (frame) {
        that.ws.subscribe("/error", function (data) {
          alert("Error" + data.body);
        });

        that.ws.subscribe("/topic/getList", function (data) {
          that.doctorData = JSON.parse(data.body);
          // console.log(that.doctorData);
          that.doctorList.saveDoctors(that.doctorData);
          that.router.navigate(['search-doctor']);
          // that.saveDoctor.push(that.doctorData);
        });


      }
    );
    return that.doctorData;
  }
  sendData() {

    this.doctorService.getDoctorByDoctorName(this.docName).subscribe(data => console.log(data));
  }

  onSearch(loc: string) {
    console.log(loc);

  }

  



}