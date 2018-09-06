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
  emailPhoneNumberFormControl = new FormControl('', [
    Validators.required,
  ])


  emailPasswordFormControl = new FormControl('', [
    Validators.required,
  ])

  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);



  matcher = new MyErrorStateMatcher();

}
