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
@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css']
})
export class BookComponentComponent implements OnInit {

  docId = "xyz@xyz.com";
  slots: Slot[];
  appointment:Appointment;

  constructor(public dialog : MatDialog, private calenderService: CalendarService , private appointmentService: AppointmentService, private tokenStorage: TokenStorage, private doctorTokenStorage: DoctorTokenStorage) { }

  ngOnInit() {
    this.calenderService.getScheduleSlot(this.docId)
    .subscribe(data => {      console.log(data);

      this.slots =data});
  }

  openDialog() {

    const dialogRef = this.dialog.open(BookConfirmComponent);

    this.appointment.appointmentStatus=true;
    this.appointment.bookedBy=this.tokenStorage.getUserId();
    this.appointment.bookedFor=this.doctorTokenStorage.getUserId();
    
    this.appointmentService.createBookingAppointment(this.appointment)
    .subscribe(data => { console.log(data);
 this.appointment=data});


  }

  slotSelected(s1: Slot){
    console.log(s1);

  }


}
