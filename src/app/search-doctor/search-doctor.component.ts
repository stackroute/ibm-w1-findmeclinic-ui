import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import {Doctor} from '../Doctor';

import { Router } from '@angular/router';


@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit {
docName;
doctor:Doctor;
  constructor(private doctorService:DoctorService,  public router: Router) { 
    this.docName=new Doctor();
    this.doctor=new Doctor();
  }

  ngOnInit() {

this.doctorService.doctor.subscribe(data=>this.docName=data);
this.doctorService.getDoctorByDoctorName(this.docName).subscribe(data1 => this.doctor=data1)
;
  }

  book(){
    this.router.navigate(['book']);
  }

}
