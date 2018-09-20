import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorage } from '../tokenStorage';
import { PatientService} from '../patient.service';
import { Patient } from '../patient';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import {FormBuilder,FormGroup,FormControl,FormGroupDirective,NgForm, Validators } from '@angular/forms';
import { PatientUpdateComponent } from './patientupdate.component';

export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  


  genders: Gender[] = [
    {value: 'Female', viewValue: 'Female'},
    {value: 'Male', viewValue: 'Male'},
    {value: 'Others', viewValue: 'Others'}
  ];


  showFiller = false;
  reports(): boolean{
    this.check2=false;
    if(this.showFiller===false){
      this.showFiller=true;
    }else{
      this.showFiller=true;
    }
    return this.showFiller
  }


  patientMail:string;
  patientData:Patient;
  registerForm: FormGroup;
  settingForm: FormGroup;

    submitted = false;
sub=false;
 
  
  badgeName:String;
  check=false;
  submit=false;
  check1=false;
  check2=false;
  check3=false;
  list=false;
  setting=false;
  password=false;
  constructor(private router: Router,fb: FormBuilder, private snackBar: MatSnackBar,public dialog: MatDialog,private token: TokenStorage,private patientService:PatientService,private formBuilder: FormBuilder) {
    this.patientData=new Patient();

    }

  ngOnInit() {
     this.registerForm = this.formBuilder.group({
                  firstName: ['', Validators.required],
                  lastName: ['', Validators.required],
                  phone: ['', [Validators.required, Validators.minLength(10)]],
                  day: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(2)]],
                  month: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(2)]],
                  year: ['', [Validators.required, Validators.minLength(4),Validators.maxLength(4)]],
                  bloodGroup: ['',Validators.required]
                  
              });

      this.settingForm = this.formBuilder.group(
        { password: ['',[Validators.required,Validators.minLength(4)]],
          confirmPassword: ['',[Validators.required,Validators.minLength(4)]]
      });

      
      function passwordMatchValidator(g: FormGroup) {
         return g.get('password').value === g.get('confirmPassword').value
            ? null : {'mismatch': true};
      }

this.check2=true;
this.patientMail = this.token.getUserId();
  //this.patientService.patientMailId.subscribe(mailId =>{ console.log(mailId);this.patientMail = mailId})
    this.patientService.getBadgeName(this.patientMail).subscribe(data=>
      {console.log(data);this.badgeName=data});
  }

    get f() { return this.registerForm.controls; }
    get g() { return this.settingForm.controls; }

 
onChange()
{
   this.sub = true;
  this.password=false;
          // stop here if form is invalid
          if (this.settingForm.invalid) {
              return;
          }
  alert('SUCCESS!! :-)')
}
     onSubmit(patient) {
         this.submitted = true;
  
         // stop here if form is invalid
         if (this.registerForm.invalid) {
             return;
         }
 else
 {

  this.list=true;
  this.submit=true;
  this.check3=false;
  this.check=true;
  this.patientService.updatePatientProfile(patient).subscribe(data1=>{this.patientData=data1;console.log(data1)})
  this.snackBar.openFromComponent(PatientUpdateComponent, {
    duration: 1000,
  });
}
    
   //this.submit=true;
 
        // alert('successfully updated!')
     }

 
  openProfile()
  {
    this.setting=false;
    this.check2=false;
    this.check=true;
    this.patientService.getPatientByMail(this.patientMail).subscribe(data=>{this.patientData=data;console.log(data)})
  }

  updateProfile(patient)
  {
    this.submit=true;
    this.check3=false;
    this.check=true;
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
      this.token.removeUserId();
      this.router.navigate(['landing-page']);
     
    }

  editProfile()
  {
   this.check=false;
   this.check3=true;
  }

  openSetting()
  {
   this.setting=true;
   this.check2=false;
   this.check=false;
  }
  changePwd()
  {
    this.password=true;
  }
  
  onClose()
  {
    this.setting=false;
    this.check2=true;
    this.password=false;

  }
    
    

  
}
