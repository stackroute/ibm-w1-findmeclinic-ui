import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Patient} from './patient';
@Injectable({
  providedIn: 'root'
})
export class PatientService {


  private baseurl="http://localhost:8080/api/v1/patient";

  constructor(private http: HttpClient) { }

  registerPatient(patient):Observable<Patient>{
    return this.http.post<Patient>(this.baseurl,patient);
  }

  login(patient:Patient):Observable<any> {
    return this.http.post(this.baseurl+"/login",patient,{responseType:'text'});
        
}
}
