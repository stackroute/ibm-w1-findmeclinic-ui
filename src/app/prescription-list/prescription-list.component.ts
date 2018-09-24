import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorage } from '../tokenStorage';
import { PrescriptionListService } from '../prescription-list.service';
import { Prescription } from '../Prescription';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css']
})
export class PrescriptionListComponent implements OnInit {

  constructor(private router: Router, private token: TokenStorage, private prescrition: PrescriptionListService) { 
  }

  prescriptions: Prescription[];
  ngOnInit() {
    this.prescrition.getPrescription(this.token.getUserId()).subscribe(pres=> this.prescriptions = pres);
  }





  show(){
  this.router.navigate(['patient-profile']);
}
  logout() {
    this.router.navigate(['landing-page']);

  }

}
