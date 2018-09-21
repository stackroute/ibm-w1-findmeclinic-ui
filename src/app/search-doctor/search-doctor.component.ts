import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import {Doctor} from '../Doctor';
import { Observable } from 'rxjs';
import { DoctorTokenStorage } from '../doctorTokenStorage';
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
doctor$:Observable<Doctor[]>;
  constructor(private doctorService:DoctorService,private doctorObject:DoctorTokenStorage) { 
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
console.log(this.docName);
// console.log("hi"+this.docName);
console.log("hello"+this.docName);
  this.doctorService.getDoctorByDoctorName(this.docName).subscribe((data1:Doctor[]) => { this.doctorList=data1; console.log(data1)});
    }



}
