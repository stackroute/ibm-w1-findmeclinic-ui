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
address1=false;



genders: Gender[] = [
  {value: 'Female', viewValue: 'Female'},
  {value: 'Male', viewValue: 'Male'},
  {value: 'Others', viewValue: 'Others'}
];

  showFiller = false;
  showContent = false;
  show(): boolean{
    this.create=false;
this.create1=false;
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
this.create=false;
this.create1=false;
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
      addressNo:['',Validators.required],
      hospitalName:['',Validators.required]
      
    });
     

        this.doctorMailId = this.token.getUserId();

        this.doctorService.getBadge(this.doctorMailId).subscribe(data1 => {console.log(data1); console.log(this.badgeName)
        this.badgeName=data1});
        console.log(this.doctorMailId)

 
   
  }
  
      get f() { return this.registerForm.controls; }


   click(){
     this.create1=true;
    this.create=false;
   this.showContent=false;
   this.showFiller=false;
      console.log(this.doctorMailId)

  
      this.doctorService.getByEmail(this.doctorMailId).subscribe(data =>{this.doctordata=data;
     console.log(data)});
    
     

   }


   open(doctor){

    //  console.log('doctor address is::', doctor);
    this.submitted = true;
     console.log(this.doctorMailId);
    return this.doctorService.updateDetails(doctor).subscribe(data => {
      this.doctordata=data;
      console.log(data)
    });
    
   }

  editProfile(){
    this.create1=false;
    this.create=true;
  }

  closeCard(){
    this.create1=false;
    this.create=false;
  }
  logout() {

    this.token.removeToken();
    this.token.removeUserId();
    this.router.navigate(['landing-page']);
    
  }
   closeEdit(){
     this.create=false;
    this.create1=true;
   }

  address(){
    this.create=false;
    this.create1=false;
    this.showContent=false;
    this.showFiller=false;
    this.address1=true;

  }

  
}
