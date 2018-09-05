import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Doctor } from '../Doctor';
import { DoctorService } from '../doctor.service';


@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

doctor;
id;
  constructor(private doctorService:DoctorService) { this.doctor=new Doctor();}

  ngOnInit() {
  }


  addDoctor(doctorData) {
    
    //this.movie=movieData;
    return this.doctorService.registerDoctor(doctorData).subscribe(data =>{ console.log("Doctor Added successfully")
  this.doctor=data;
  });
  }
  

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

}
