import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Doctor } from '../Doctor';
import { DoctorService } from '../doctor.service';
import { MatDialogRef } from '@angular/material';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

doctor;
id;
  constructor(private doctorService:DoctorService,private dialogRef: MatDialogRef<DoctorLoginComponent>,public dialog : MatDialog) { this.doctor=new Doctor();}

  ngOnInit() {
  }


  addDoctor(doctorData) {
    
    //this.movie=movieData;
    return this.doctorService.registerDoctor(doctorData).subscribe(data =>{ console.log("Doctor Added successfully")
  this.doctor=data;
  });
  }
<<<<<<< HEAD
  
=======
  close() {
    this.dialogRef.close();
  }
  open():void{
    this.dialog.open(DoctorLoginComponent);
    
  }
>>>>>>> 09e37e66c6a02ba8224415a5873947fd2ea5c188

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

}
