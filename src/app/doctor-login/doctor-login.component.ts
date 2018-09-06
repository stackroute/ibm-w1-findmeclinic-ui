import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Doctor } from '../Doctor';
import { DoctorService } from '../doctor.service';
import { MatDialogRef } from '@angular/material';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  doctor;
  id;
  isRegistered = false;

  constructor(private doctorService: DoctorService, private dialogRef: MatDialogRef<DoctorLoginComponent>, public dialog: MatDialog, private router: Router) { this.doctor = new Doctor(); }

  ngOnInit() {
  }


 

  addDoctor(doctorData) {
    return this.doctorService.registerDoctor(doctorData).subscribe(data => {
      console.log("Doctor ");
    });
  }
  close() {
    this.dialogRef.close();
    
  }
  navigate(){
    this.router.navigate(["doctor-profile"]);
  }
  open(): void {
    this.dialog.open(DoctorLoginComponent, {
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
