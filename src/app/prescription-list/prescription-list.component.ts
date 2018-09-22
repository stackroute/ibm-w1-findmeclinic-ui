import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorTokenStorage } from '../doctorTokenStorage';
import { DoctorService } from '../doctor.service';
import { PatientProfileComponent } from '../patient-profile/patient-profile.component';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css']
})
export class PrescriptionListComponent implements OnInit {

  constructor(private router: Router, private token: DoctorTokenStorage, private doctorService: DoctorService) { 
  }
  ngOnInit() {
  }

show(){
  this.router.navigate(['patient-profile']);
}
  
  logout() {
    this.router.navigate(['landing-page']);

  }
}
