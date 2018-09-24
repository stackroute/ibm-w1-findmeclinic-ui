import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject} from 'rxjs';

import {Patient} from './patient';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patientMailId;


  private firstUrl="http://localhost:8086/api/v1/patientauth";
  private secondUrl="http://localhost:8089/api/v1/patient"

  constructor(private http: HttpClient) { }

  registerPatientAuth(patient):Observable<Patient>{
    return this.http.post<Patient>(this.firstUrl,patient);
  }

  login(patient:Patient):Observable<any> {

    //this. patientMailId = new BehaviorSubject(patient.patientEmail).asObservable();
    return this.http.post(this.firstUrl+"/login",patient,{responseType:'text'});
        
}

registerPatient(patient):Observable<Patient>{
    
  return this.http.post<Patient>(this.secondUrl,patient);
  
}

getPatientByMail(patientEmail:string):Observable<Patient>
{
  return this.http.get<Patient>(this.secondUrl+"/"+patientEmail);
}

getBadgeName(patientEmail:string):Observable<any>
{
  return this.http.get(this.secondUrl+"/badge/"+patientEmail,{responseType:'text'});
}

updatePatientProfile(patient:Patient):Observable<Patient>
{
  return this.http.put<Patient>(this.secondUrl+"/"+patient.patientEmail,patient);
}

}
