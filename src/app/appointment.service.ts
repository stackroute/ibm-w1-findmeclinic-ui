import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Appointment } from './appointment';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  docId: string;

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  
 private baseUrl= "http://localhost:8085/api/v1/appointment"
  constructor(private http: HttpClient) { }

  getAllAppointments(userId):Observable<Appointment[]>
  {
    return this.http.get<Appointment[]>(this.baseUrl+"/doctor/"+userId);
  }
  
  createBookingAppointment(appointment: Appointment):Observable<Appointment>{
    return this.http.post<Appointment>(this.baseUrl+"/add", appointment)
  }
  getAllAppointmentOfPatient(patientId):Observable<Appointment[]>
  {
    return this.http.get<Appointment[]>(this.baseUrl+"/patient/"+patientId);
  }
  
  
  

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  
}
