import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private firstUrl="http://localhost:8086/api/v1/patient"
 private baseUrl= "http://localhost:8081/api/v1/appointment"
  constructor(private http: HttpClient) { }

  getAllAppointments(userId):Observable<Appointment[]>
  {
    return this.http.get<Appointment[]>(this.baseUrl+"/doctor/"+userId);
  }
  
  createBookingAppointment(appointment: Appointment):Observable<Appointment>{
    return this.http.post<Appointment>(this.baseUrl+"/add", appointment)
  }
  getPatientByPatientId(patientId):Observable<Appointment[]>
  {
    return this.http.get<Appointment[]>(this.firstUrl+"/"+patientId);
  }
  

  
}
