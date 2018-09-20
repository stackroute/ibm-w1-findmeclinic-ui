import { Component, OnInit,ViewChild } from '@angular/core';
import {BookingAppointment} from '../bookingAppointment';
import { APPOINTMENT } from '../sampleAppointment';

import {MatPaginator,MatTableDataSource} from '@angular/material'
import { Router } from '@angular/router';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {


  displayedColumns=['bookingId','bookingStatus'];
  dataSource= new MatTableDataSource<BookingAppointment>(APPOINTMENT);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  appointment=APPOINTMENT;
 
   constructor(private router: Router) {
    }
 
   
 ngAfterViewInit(){
 this.dataSource.paginator= this.paginator;
 }
   ngOnInit() {
    
   }
  
 

}
