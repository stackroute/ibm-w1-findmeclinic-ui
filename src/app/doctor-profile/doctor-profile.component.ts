import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorTokenStorage } from '../doctorTokenStorage';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../Doctor';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  doctorData;
  create=false;
  doctorEmail;
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
  constructor(private router: Router, private token: DoctorTokenStorage, private doctorService: DoctorService) { 
    this.doctorData=new Doctor();
  }

  ngOnInit() {
    //this.doctorService.doctorMail.subscribe(mailId =>{ console.log(mailId);this.doctorEmail = mailId})
  }
  
   click(){
     this.create=true;
  //    return this.doctorService.getByEmail(this.doctorEmail).subscribe(data =>{this.doctorData=data;
  //  console.log(data)});

   }


  
  logout() {

    this.token.removeToken();
    this.router.navigate(['landing-page']);
    
  }
}
