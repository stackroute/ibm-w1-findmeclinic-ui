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

  
<<<<<<< HEAD
 private baseUrl= "http://localhost:8085/api/v1/appointment"
=======
<<<<<<< HEAD
 private baseUrl= "http://localhost:8085/api/v1/appointment"
=======
 private baseUrl= "http://localhost:8091/bookingappointment/api/v1/appointment"
>>>>>>> 9f14a678b21533c446c3cf2af91e9b42195d9e99
>>>>>>> 034e210171c27323302077936ec1ee834c1bc357
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
