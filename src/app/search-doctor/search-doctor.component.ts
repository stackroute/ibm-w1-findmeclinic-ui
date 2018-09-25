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
  }

  book(doctorEmail)
  {
     this.appointmentService.docId = doctorEmail;
  
  //   this.doctorName1=this.doctorObject.getDoctorName();
  //   this.doctorService.getDoctorEmail(this.doctorName1).subscribe(data=>{this.doctorEmail=data;console.log(this.doctorEmail)});
  //   this.doctorObject.saveUserId(this.doctorEmail);
 
  //  this.docEmail=doctorEmail;
  //  this.docEmail="a@gmail.com";
  //  this.calendarService.getAllScheduleByDoctor(this.docEmail);
  


  if(this.tokenStorage.getUserId()==null){
    this.router.navigate(['landing-page']);
  }
    else{
      this.router.navigate(['book']);
    } 
  

   }
}
