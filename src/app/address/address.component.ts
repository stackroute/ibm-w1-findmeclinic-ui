import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { DoctorAddress } from '../doctorAddress';
import { DoctorTokenStorage } from '../doctorTokenStorage';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
doctorAddress;
doctormail;
doctor;
  constructor(private doctorService:DoctorService, private token: DoctorTokenStorage) {
    this.doctorAddress = new DoctorAddress();
   }

  ngOnInit() {
    this.doctormail = this.token.getUserId();
    // this.doctorService.addDoctorDetails(this.doctormail).subscribe(data => {console.log(data);
    // this.doctormail= data});
  }
  addAddress(doctorAddress){
    

    return this.doctorService.addAddressDeatils(doctorAddress).subscribe(data => {console.log(data);
    this.doctorAddress=data});
  }
}
