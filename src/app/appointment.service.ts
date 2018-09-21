import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingAppointment } from './bookingAppointment';
import {HttpClient} from '@angular/common/http';
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
  
  createBookingAppointment(appointment: Object):Observable<Object>{
    return this.http.post(this.baseUrl+"/add", appointment)
  }


  
}
