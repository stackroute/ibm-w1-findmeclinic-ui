import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorage } from '../tokenStorage';
import { PatientService} from '../patient.service';
import { Patient } from '../patient';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';

import {FormBuilder,FormGroup,FormControl,FormGroupDirective,NgForm, Validators } from '@angular/forms';
import { PatientUpdateComponent } from './patientupdate.component';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  
  patientMail:string;
  patientData:Patient;
  registerForm: FormGroup;
    submitted = false;
 
  
  badgeName:String;
  check;
  submit=false;
  check1=false;
  check2=false;
  constructor(private router: Router, private snackBar: MatSnackBar,public dialog: MatDialog,private token: TokenStorage,private patientService:PatientService,private formBuilder: FormBuilder) {
    this.patientData=new Patient();
   }

  ngOnInit() {
     this.registerForm = this.formBuilder.group({
                  firstName: ['', Validators.required],
                  lastName: ['', Validators.required],
                  //email: ['', [Validators.required, Validators.email]],
                  phone: ['', [Validators.required, Validators.minLength(10)]],
                  //dob: ['',Validators.required],
                  bloodGroup: ['',Validators.required]
              });

this.check2=true;
    this.patientService.patientMailId.subscribe(mailId =>{ console.log(mailId);this.patientMail = mailId})
    this.patientService.getBadgeName(this.patientMail).subscribe(data=>
      {console.log(data);this.badgeName=data});
  }

    get f() { return this.registerForm.controls; }

  openProfile()
  {
    this.check2=false;
    this.check=true;
    this.patientService.getPatientByMail(this.patientMail).subscribe(data=>{this.patientData=data;console.log(data)})
  }

  updateProfile(patient)
  {
    this.submit=true;
    this.patientService.updatePatientProfile(patient).subscribe(data1=>{this.patientData=data1;console.log(data1)})
    this.snackBar.openFromComponent(PatientUpdateComponent, {
      duration: 1000,
    });
  }
  closeCard()
  {
    this.check=false;
    this.check2=true;
    

  }
  logout() {

      this.token.removeToken();
      this.router.navigate(['landing-page']);
      
    }
    
    

  
}
