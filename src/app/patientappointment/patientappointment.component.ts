import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../appointment';
import { MatDialog } from '@angular/material';
import { PrescriptionsComponent } from '../prescriptions/prescriptions.component';
import { MatPaginator, MatTableDataSource } from '@angular/material'
import { TokenStorage } from '../tokenStorage';
import { AppointmentService } from '../appointment.service';
@Component({
  selector: 'app-patientappointment',
  templateUrl: './patientappointment.component.html',
  styleUrls: ['./patientappointment.component.css']
})
export class PatientappointmentComponent implements OnInit {
  displayedColumns = ['appointmentId', 'appointmentStatus'];
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
  dataSource = new MatTableDataSource<Appointment>(this.listOfAppointments);

  constructor(private router: Router, public dialog: MatDialog, private patientId:TokenStorage, private appService:AppointmentService) { }

  ngOnInit() {
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
  




  ngAfterViewInit() {
    this.userId = this.patientId.getUserId();
    this.appService.getAllAppointmentOfPatient(this.userId).subscribe((data: Appointment[]) => {
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
  }

}
