import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import {Prescription} from './Prescription';


@Injectable({
  providedIn: 'root'
})
export class PrescriptionListService {

  private listUrl="http://localhost:80901/record-service/api/v1/record/patient/";

  constructor(private http: HttpClient) { }

  getPrescription(patientID): Observable<Prescription[]> {
    return this.http.get<Prescription[]>(this.listUrl+patientID);
  } 

}
