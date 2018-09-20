import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorTokenStorage } from '../doctorTokenStorage';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../Doctor';
import {FormBuilder,FormGroup,FormControl,FormGroupDirective,NgForm, Validators } from '@angular/forms';

export interface Gender {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  doctordata;
  create=false;
  registerForm: FormGroup;
  doctorMailId;
create1=false;
badgeName:string;
submitted = false;




genders: Gender[] = [
  {value: 'Female', viewValue: 'Female'},
  {value: 'Male', viewValue: 'Male'},
  {value: 'Others', viewValue: 'Others'}
];

  showFiller = false;
  showContent = false;
  show(): boolean{
    this.showContent=false;
    if(this.showFiller===false){
      this.showFiller=true;
    }else{
      this.showFiller=true;
    }
    return this.showFiller
  }
  
 
 display(): boolean{
   this.showFiller=false;

  if(this.showContent===false){
    this.showContent=true;
  }else{
    this.showContent=true;
  }
  return this.showContent
 }
  constructor(private router: Router, private token: DoctorTokenStorage, private doctorService: DoctorService,private formBuilder: FormBuilder) { 
    this.doctordata=new Doctor();
  }

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
                  firstName: ['', Validators.required],
      lastName:['',Validators.required],
      phoneNumber:['',Validators.required],
      email:['',Validators.required],
      gender:['',Validators.required],
      qualification:['',Validators.required],
      speciality:['',Validators.required],
      experience:['',Validators.required],
      address:['',Validators.required]

    });
     
     
       this.doctorService.doctorMail.subscribe(data => {console.log(data);
        this.doctorMailId=data;})
        this.doctorService.getBadge(this.doctorMailId).subscribe(data1 => {console.log(data1);
        this.badgeName=data1});
        console.log(this.doctorMailId)

 
   
  }
  
      get f() { return this.registerForm.controls; }


   click(){
     this.create1=true;
    this.create=false;
   
      console.log(this.doctorMailId)

  
      this.doctorService.getByEmail(this.doctorMailId).subscribe(data =>{this.doctordata=data;
     console.log(data)});
    
     

   }


   open(doctor){
    this.submitted = true;
     console.log(this.doctorMailId);
    return this.doctorService.updateDetails(doctor).subscribe(data1 => {
      this.doctordata=data1;
      console.log(data1)
    });
   }

  editProfile(){
    this.create1=false;
    this.create=true;
  }

  closeCard(){
    this.create=false;
  }
  logout() {

    this.token.removeToken();
    this.router.navigate(['landing-page']);
    
  }
}
