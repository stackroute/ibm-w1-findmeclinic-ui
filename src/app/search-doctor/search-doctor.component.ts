import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import {Doctor} from '../Doctor';
import { Observable } from 'rxjs';
import { DoctorTokenStorage } from '../doctorTokenStorage';
import { Router } from '@angular/router';
import { DoctorlistService } from '../doctorlist.service';
import { AppointmentService } from '../appointment.service';
import { TokenStorage } from '../tokenStorage';
import { CalendarService } from '../calendar.service';
@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit {
  docName: string ='';
doctorList:Doctor[];
data1:any;
data2:any;
doctorName1;
docEmail:string;
doctor$:Observable<Doctor[]>;
message:string;

  constructor(private doctorService:DoctorService,
    private doctorObject:DoctorTokenStorage,
    private router:Router,
  public doctorArray: DoctorlistService,
private appointmentService: AppointmentService,
private tokenStorage: TokenStorage,
private calendarService: CalendarService) { 
    //this.doctor=new Doctor();
  }

  ngOnInit() {

this.doctorList = this.doctorArray.getDoctorList();
console.log(this.doctorList);

this.appointmentService.currentMessage
.subscribe(message => this.message = message)
  }

  book(doctorEmail)
  {

  this.docEmail=doctorEmail;
  this.appointmentService.changeMessage(this.docEmail);
  this.router.navigate(['book']);
  
   }
}
