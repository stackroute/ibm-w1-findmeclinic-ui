import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorTokenStorage } from '../doctorTokenStorage';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  showFiller = false;
  show(): boolean{
    if(this.showFiller===false){
      this.showFiller=true;
    }else{
      this.showFiller=true;
    }
    return this.showFiller
  }
  constructor(private router: Router, private token: DoctorTokenStorage) { }

  ngOnInit() {
  }

  logout() {

    this.token.removeToken();
    this.router.navigate(['landing-page']);
    
  }
}
