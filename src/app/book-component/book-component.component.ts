import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
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
import { Notification} from '../Notification';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css']
})
export class BookComponentComponent implements OnInit {

  docId;
  slots: Slot[];
  schedules: Schedule[];
  slotLists: Slot[];
  appointment: Appointment;
  schedule: Schedule;
  s2: Slot;
  note:Notification;

  constructor(public dialog: MatDialog, private calenderService: CalendarService
    , private appointmentService: AppointmentService, private tokenStorage: TokenStorage,
    private activatedroute: ActivatedRoute,
    private router: Router,private notifyObj:NotificationService) { this.appointment = new Appointment() }

  ngOnInit() {


    this.appointmentService.currentMessage
      .subscribe(message => this.docId = message);

    // this.docId="a@gmail.com";

    this.calenderService.getScheduleSlot(this.docId)
      .subscribe(data => {
        console.log(data);
        this.slots = data
      });


    this.calenderService.getAllScheduleByDoctor(this.docId)
      .subscribe(data => {
        console.log(data);
        this.schedules = data;
      });

  }

  openDialog() {

    // this.flag=this.authGaurdService.canActivate();
    // if (this.flag==false) {
    //   this.router.navigate(['landing-page']);
    // }
    // else {

      this.appointment.appointmentStatus = true;

      this.appointment.bookingBy = this.tokenStorage.getUserId();

      this.appointment.bookedFor = this.docId;
     
      this.appointment.slot = this.s2;


      this.appointmentService.createBookingAppointment(this.appointment)
        .subscribe(data => {
          console.log(data);
          this.appointment = data
        });

      


      const dialogRef = this.dialog.open(BookConfirmComponent);
    // }
  }

  slotSelected(s1: Slot) {
    console.log(s1);

    this.s2 = s1;
    this.s2.status = "blocked";
  }


}