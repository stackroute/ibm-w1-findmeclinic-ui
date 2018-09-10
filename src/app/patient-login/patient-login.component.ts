import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { MatDialog } from '@angular/material';
import { TokenStorage } from '../tokenStorage';
import { AlertsService } from 'angular-alert-module';
import { MatSnackBar } from '@angular/material';
import { InvalidPatientComponent } from './invalid-patient.component';
import { FailPatientComponent } from './fail-patient.component';
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
  registeredPatient;
  constructor(private dialogRef: MatDialogRef<PatientLoginComponent>, private snackBar: MatSnackBar,
    private alerts: AlertsService, private router: Router, private patientService: PatientService, public dialog: MatDialog, private token: TokenStorage) {
    this.patient = new Patient();
    this.registeredPatient = new Patient();
  }

  ngOnInit() {
  }



  open() {
    this.dialog.open(PatientLoginComponent);

  }


  addPatient(Patientdata) {
    return this.patientService.registerPatient(Patientdata).subscribe(data => {
      this.dialog.open(PatientLoginComponent)
      console.log("the patient added")
    },
      error => {

        {
          this.snackBar.openFromComponent(FailPatientComponent, {
            duration: 1000,
          });
        }
      })
  }
  closeRegister() {
    this.dialogRef.close();
  }

  openLogin(patient) {

    return this.patientService.login(patient).subscribe(data => {
      this.dialogRef.close();
      this.token.saveToken(data);
      this.router.navigate(['patient-profile']);
    }

      , error => {
        this.snackBar.openFromComponent(InvalidPatientComponent, {
          duration: 1000,
        });


      }

    )


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
