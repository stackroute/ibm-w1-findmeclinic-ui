import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorage } from '../tokenStorage';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  constructor(private router: Router, private token: TokenStorage) { }

  ngOnInit() {
  }

  logout() {

      this.token.removeToken();
      this.router.navigate(['landing-page']);
      
    }


    


  
}
