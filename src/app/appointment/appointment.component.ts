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
  displayAppointments:BookingAppointment[];
  numOfApp;
  lengthlist=4;
  bId;
appId=[];
appStatus=[];
size;
listSize;
diff;
  dataSource= new MatTableDataSource<BookingAppointment>(this.listOfAppointments);
   constructor(private router: Router,public dialog: MatDialog,private appService: AppointmentService) {
    }


    ngOnInit() {
     
         
       
      
  
     }
     onPage()
     {
      this.numOfApp=this.listSize-1;
      this.diff=this.listSize-this.paginator.pageSize;
     if(this.diff > 0)
       {
      this.numOfApp=this.paginator.pageSize;
       }
       this.displayAppointments=this.listOfAppointments.slice(0,this.numOfApp);
       console.log(this.displayAppointments)
       
     }
    open(){
     
      this.dialog.open(PrescriptionsComponent)
    
         }
   
 ngAfterViewInit(){


   this.appService.getAllAppointments().subscribe((data: BookingAppointment[])=>{
    this.listOfAppointments=data;
    this.lengthlist = this.listOfAppointments.length;
    
 this.listSize=this.lengthlist
  this.numOfApp=this.listSize-1;
 this.diff=this.listSize-this.paginator.pageSize;
if(this.diff > 0)
  {
 this.numOfApp=this.paginator.pageSize;
  }
  this.displayAppointments=this.listOfAppointments.slice(0,this.numOfApp);
  console.log(this.displayAppointments)
  
})
 }
   
   
  



}
