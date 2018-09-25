import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import {Doctor} from '../Doctor';
import { Observable } from 'rxjs';
import { DoctorTokenStorage } from '../doctorTokenStorage';
import { Router } from '@angular/router';
import { DoctorlistService } from '../doctorlist.service';
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
doctorEmail:string;
doctor$:Observable<Doctor[]>;
  constructor(private doctorService:DoctorService,
    private doctorObject:DoctorTokenStorage,
    private router:Router,
  public doctorArray: DoctorlistService) { 
  }

  ngOnInit() {

this.doctorList = this.doctorArray.getDoctorList();
console.log(this.doctorList);
  }

}
