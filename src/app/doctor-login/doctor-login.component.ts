import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Doctor } from '../Doctor';
import { DoctorService } from '../doctor.service';
import { MatDialogRef } from '@angular/material';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DoctorTokenStorage} from '../doctorTokenStorage';
import { AlertsService } from 'angular-alert-module';  
import {MatSnackBar} from '@angular/material';
import { InvalidDoctorComponent } from './invalid-doctor.component';
import { FailRegisterComponent } from './fail-register.component';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  doctor;
  loginDoctor;
  id;
  isRegistered = false;
  doctorMail:string;
  
  constructor(private doctorService: DoctorService,private snackBar:MatSnackBar,private token:DoctorTokenStorage, private dialogRef: MatDialogRef<DoctorLoginComponent>, public dialog: MatDialog, private router: Router,private alert:AlertsService)
   { this.doctor = new Doctor();
    this.loginDoctor = new Doctor();
   }

  ngOnInit() {
  }



  addDoctor(doctorData) {
    
   this.doctorService.addDoctorDetails(doctorData).subscribe(data =>{console.log(data)});
    return this.doctorService.registerDoctor(doctorData).subscribe(data =>{
              this.dialog.open(DoctorLoginComponent)
       this.dialogRef.close();
       console.log("Doctor is added ")},error=>{

        {
          this.snackBar.openFromComponent(FailRegisterComponent, {
            duration: 1000,
        });
       
      }})
    
  }
  move(doctorData){
    this.token.saveUserId(doctorData.doctorEmail);

    return this.doctorService.login(doctorData).subscribe(data=>
      {
       
        this.doctorMail=data;
        this.token.saveToken(data);
        this.router.navigate(['doctor-profile']);
      },
    error=>
  {
    this.snackBar.openFromComponent(InvalidDoctorComponent, {
      duration: 1000,
  });
})}

  


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
