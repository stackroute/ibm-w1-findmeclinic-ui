import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingAppointment } from './bookingAppointment';
import {HttpClient} from '@angular/common/http';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
 private baseUrl= "http://localhost:8081/api/v1/appointment"
  constructor(private http: HttpClient) { }

  getAllAppointments():Observable<BookingAppointment[]>
  {
    return this.http.get<BookingAppointment[]>(this.baseUrl+"/appointments")
  }
  
  createBookingAppointment(appointment: Appointment):Observable<Appointment>{
    return this.http.post<Appointment>(this.baseUrl+"/add", appointment)
  }


  
}
