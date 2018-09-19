import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorTokenStorage } from '../doctorTokenStorage';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../Doctor';
import {FormBuilder,FormGroup,FormControl,FormGroupDirective,NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  doctordata;
  create=false;
  registerForm: FormGroup;
  doctorMail;


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
    //  return this.doctorService.doctorMail.subscribe(data => {console.log(data);
    //    this.doctorMail=data;})
   
  }
  
      get f() { return this.registerForm.controls; }


   click(){
     this.create=true;
    //  this.doctorService.getByEmail(this.doctorMail).subscribe(data =>{this.doctordata=data;
    // console.log(data)});
    // this.doctorService.updateDetails(this.doctorMail).subscribe(data1 => {
    //   this.doctorMail=data1;
    //   console.log(data1)
    // });

   }


   open(doctor){
    return this.doctorService.addDoctorDetails(doctor).subscribe(data1 => {
      this.doctordata=data1;
      console.log(data1)
    });
   }

  
  logout() {

    this.token.removeToken();
    this.router.navigate(['landing-page']);
    
  }
}
