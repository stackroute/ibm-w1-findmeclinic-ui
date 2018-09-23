import { Component, OnInit, ViewChild } from '@angular/core';
import { Appointment } from '../appointment';
import { MatDialog } from '@angular/material';
import { PrescriptionsComponent } from '../prescriptions/prescriptions.component';
import { MatPaginator, MatTableDataSource } from '@angular/material'
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { DoctorTokenStorage } from '../doctorTokenStorage';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {


  displayedColumns = ['appointmentId', 'appointmentStatus'];
<<<<<<< HEAD
  show = false;
=======

>>>>>>> 895fafc67fafd384565ebc87e804dc965d5066da
  @ViewChild(MatPaginator) paginator: MatPaginator;
  listOfAppointments: Appointment[];
  displayAppointments: Appointment[];
  numOfApp;
  lengthlist = 4;
  bId;
  appId = [];
  appStatus = [];
  size;
  listSize;
  diff;
  userId;
<<<<<<< HEAD
  patientName;
=======
>>>>>>> 895fafc67fafd384565ebc87e804dc965d5066da
  dataSource = new MatTableDataSource<Appointment>(this.listOfAppointments);
  constructor(private router: Router, public dialog: MatDialog, private doctorId: DoctorTokenStorage, private appService: AppointmentService) {
  }


  ngOnInit() {

<<<<<<< HEAD
=======




>>>>>>> 895fafc67fafd384565ebc87e804dc965d5066da
  }
  onPage() {
    this.numOfApp = this.listSize - 1;
    this.diff = this.listSize - this.paginator.pageSize;
    if (this.diff > 0) {
      this.numOfApp = this.paginator.pageSize;
    }
    this.displayAppointments = this.listOfAppointments.slice(0, this.numOfApp);
    console.log(this.displayAppointments)

  }
<<<<<<< HEAD
  open(){

    this.dialog.open(PrescriptionsComponent)

       }

   
  
=======
  open() {

    this.dialog.open(PrescriptionsComponent)

  }

  ngAfterViewInit() {
    this.userId = this.doctorId.getUserId();

    this.appService.getAllAppointments(this.userId).subscribe((data: Appointment[]) => {
      this.listOfAppointments = data;
      this.lengthlist = this.listOfAppointments.length;

      this.listSize = this.lengthlist
      this.numOfApp = this.listSize - 1;
      this.diff = this.listSize - this.paginator.pageSize;
      if (this.diff > 0) {
        this.numOfApp = this.paginator.pageSize;
      }
      this.displayAppointments = this.listOfAppointments.slice(0, this.numOfApp);
      console.log(this.displayAppointments)

    })
  }



>>>>>>> 895fafc67fafd384565ebc87e804dc965d5066da

  ngAfterViewInit() {
    this.userId = this.doctorId.getUserId();

    this.appService.getAllAppointments(this.userId).subscribe((data: Appointment[]) => {
      this.listOfAppointments = data;
      this.lengthlist = this.listOfAppointments.length;

      this.listSize = this.lengthlist
      this.numOfApp = this.listSize - 1;
      this.diff = this.listSize - this.paginator.pageSize;
      if (this.diff > 0) {
        this.numOfApp = this.paginator.pageSize;
      }
      this.displayAppointments = this.listOfAppointments.slice(0, this.numOfApp);
      console.log(this.displayAppointments);
       })
      //  this.appService.getPatientByPatientId(this.userId).subscribe(( dataName: Appointment[])=>{
      //   this.patientName=dataName;
      //     console.log(dataName)
      // })
        
  }






}
