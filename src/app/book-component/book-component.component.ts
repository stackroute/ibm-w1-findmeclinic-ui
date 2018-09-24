import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { BookConfirmComponent } from '../book-confirm/book-confirm.component';
import { Observable } from 'rxjs';
import { Slot } from '../Slot';
import { CalendarService } from '../calendar.service';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';
import { TokenStorage } from '../tokenStorage';
import { DoctorTokenStorage } from '../doctorTokenStorage';
import { ActivatedRoute, Router } from '@angular/router';
import { Schedule } from '../Schedule';
@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css']
})
export class BookComponentComponent implements OnInit {

  docId;
  slots: Slot[];
  schedules: Schedule[];
  slotLists:Slot[];
  appointment:Appointment;
  schedule:Schedule;

  s2:Slot;

  constructor(public dialog : MatDialog, private calenderService: CalendarService 
    , private appointmentService: AppointmentService, private tokenStorage: TokenStorage, 
    private doctorTokenStorage: DoctorTokenStorage,private activatedroute: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {

   this.docId = this.activatedroute.snapshot.params['doctorEmail'];

    // this.docId="a@gmail.com";
    this.calenderService.getScheduleSlot(this.docId)
    .subscribe(data => {      
      console.log(data);
      this.slots =data
     });

      
    this.calenderService.getAllScheduleByDoctor(this.docId)
    .subscribe(data=>{
      console.log(data);
      this.schedules =data
    //   ;
    //  this.slotLists =data.getSlots()
    });

      // this.slotLists=this.schedule.slots;
      // console.log(this.slotLists);
  }

  openDialog() {

    const dialogRef = this.dialog.open(BookConfirmComponent);

    this.appointment.appointmentStatus=true;
    this.appointment.bookingBy=this.tokenStorage.getUserId();

    if(this.appointment.bookingBy==null){
      this.router.navigate(['patient-login'])
    }

    this.appointment.bookedFor=this.docId;
    this.appointment.slot=this.s2;

    this.appointmentService.createBookingAppointment(this.appointment)
    .subscribe(data => { console.log(data);
 this.appointment=data});


  }

  slotSelected(s1: Slot){
    console.log(s1);

    this.s2=s1;
  }


}
