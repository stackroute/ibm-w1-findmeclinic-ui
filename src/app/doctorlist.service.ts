import { Injectable } from '@angular/core';
import { Doctor } from './Doctor';

let    doctorsList: Doctor[]=[];

@Injectable({
  providedIn: 'root'
})
export class DoctorlistService {

  constructor() { }


  saveDoctors(doctors: Doctor[]){
    console.log(doctors);
    doctorsList=doctors;

  }

  getDoctorList(){

    return doctorsList;
  }
}
