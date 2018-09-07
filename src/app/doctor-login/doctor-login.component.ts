import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Doctor } from '../Doctor';
import { DoctorService } from '../doctor.service';
import { MatDialogRef } from '@angular/material';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import {TokenStorage} from '../tokenStorage';
@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  doctor;
  id;
  isRegistered = false;

  constructor(private doctorService: DoctorService,private token:TokenStorage, private dialogRef: MatDialogRef<DoctorLoginComponent>, public dialog: MatDialog, private router: Router) { this.doctor = new Doctor(); }

  ngOnInit() {
  }



  addDoctor(doctorData) {
    
  
    return this.doctorService.registerDoctor(doctorData).subscribe(data =>{ console.log("Doctor Added successfully")
  this.doctor=data;
  });
  }
  move(doctorData){
    this.dialogRef.close();
    return this.doctorService.login(doctorData).subscribe(data=>
      {
        this.token.saveToken(data);
        this.router.navigate(['doctor-profile']);
      })
  }


  close(){
    this.dialogRef.close();
  }
  open():void{
    this.dialog.open(DoctorLoginComponent,{
    }
    );


  }
  phoneFormComtrol = new FormControl('', [
    Validators.required
  ])

  passFormControl = new FormControl('', [
    Validators.required
  ])

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ])
  logpassFormControl = new FormControl('', [
    Validators.required
  ])

  logFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ])

  ;

}
