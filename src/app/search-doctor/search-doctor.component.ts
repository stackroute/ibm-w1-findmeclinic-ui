import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import {Doctor} from '../Doctor';
import { Observable } from 'rxjs';
import { DoctorTokenStorage } from '../doctorTokenStorage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit {
docName;
doctorList:Doctor[];
doctor$:Observable<Doctor[]>;
  constructor(private doctorService:DoctorService,private doctorObject:DoctorTokenStorage, private router:Router) { 
    this.docName=new Doctor();
    //this.doctor=new Doctor();
  }

  ngOnInit() {


// this.doctorService.doctor.subscribe(data=>
//   {
//     console.log("data is",data);
//     this.docName=data;
//   }
//   );
this.docName=this.doctorObject.getDoctorName();
console.log("hi"+this.docName);
  this.doctorService.getDoctorByDoctorName(this.docName).subscribe((data1:Doctor[]) => { this.doctorList=data1; console.log(data1)});

  }

  moveToSlot(){
     this.router.navigate(['book/']);
  }

}
