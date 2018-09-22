import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
 private baseUrl= "http://localhost:8081/api/v1/appointment"
  constructor(private http: HttpClient) { }

  getAllAppointments(userId):Observable<Appointment[]>
  {
    return this.http.get<Appointment[]>(this.baseUrl+"/"+userId);
  }
  
  createBookingAppointment(appointment: Appointment):Observable<Appointment>{
    return this.http.post<Appointment>(this.baseUrl+"/add", appointment)
  }


  
}
