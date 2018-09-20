import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
<<<<<<< HEAD
import { Doctor } from '../Doctor';

=======
import {Doctor} from '../Doctor';
import { Observable } from 'rxjs';
import { DoctorTokenStorage } from '../doctorTokenStorage';
>>>>>>> c9bb8af461ff3e61146d72b3d5fe9594330a6887
@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit {
<<<<<<< HEAD



  docName;
  doctor: Doctor;
  constructor(private doctorService: DoctorService) {
    this.docName = new Doctor();
    this.doctor = new Doctor();
  }

  ngOnInit() {
    this.doctorService.doctor.subscribe(data => {
    console.log("doctor object",data);
    this.docName = data
    }
      );
    this.doctorService.getDoctorByDoctorName(this.docName).subscribe(data1 => this.doctor = data1);
=======
docName;
doctorList:Doctor[];
doctor$:Observable<Doctor[]>;
  constructor(private doctorService:DoctorService,private doctorObject:DoctorTokenStorage) { 
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

>>>>>>> c9bb8af461ff3e61146d72b3d5fe9594330a6887
  }

}
