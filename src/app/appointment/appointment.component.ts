import { Component, OnInit,ViewChild } from '@angular/core';
import {BookingAppointment} from '../bookingAppointment';
import { APPOINTMENT } from '../sampleAppointment';
import { MatDialog } from '@angular/material';
import { PrescriptionsComponent } from '../prescriptions/prescriptions.component';
import {MatPaginator,MatTableDataSource} from '@angular/material'
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {


  displayedColumns=['appointmentId','appointmentStatus'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  listOfAppointments:BookingAppointment[];

  dataSource= new MatTableDataSource<BookingAppointment>(this.listOfAppointments);
   constructor(private router: Router,public dialog: MatDialog,private appService: AppointmentService) {
    }
    open(){
     
      this.dialog.open(PrescriptionsComponent)
    
         }
   
 ngAfterViewInit(){
 this.dataSource.paginator= this.paginator;
 }
   ngOnInit() {
     this.appService.getAllAppointments().subscribe((data: BookingAppointment[])=>{
       this.listOfAppointments=data;
       console.log(data);
       console.log(this.dataSource)
     })
    

   }
  
 

}
