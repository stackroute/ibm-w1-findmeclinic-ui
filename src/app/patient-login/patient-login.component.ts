import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import {MatDialog} from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {
patient;
  constructor(private dialogRef: MatDialogRef<PatientLoginComponent>, private router:Router, private patientService :PatientService, public dialog : MatDialog) { 
    this.patient=new Patient();
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
    this.router.navigate(['patient-profile']);
  }

  
  open(){
    this.dialog.open(PatientLoginComponent);
    
  }
 

  addPatient(Patientdata){
    return this.patientService.registerPatient(Patientdata).subscribe(data => console.log("the patient added"));
  }
  closeRegister(){
    this.dialogRef.close();
  }
<<<<<<< HEAD

  openLogin(newPatient){
    this.patientService.login(newPatient).subscribe((data)=>
    {

      console.log(data)
     // this.token.saveToken(data.token);

    })
  }
 
=======
  emailPhoneNumberFormControl = new FormControl('', [
    Validators.required,
  ])


  emailPasswordFormControl = new FormControl('', [
    Validators.required,
  ])
>>>>>>> bad345d2441e256beebfafb173c31cc580e75a96

  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);



  matcher = new MyErrorStateMatcher();

}
