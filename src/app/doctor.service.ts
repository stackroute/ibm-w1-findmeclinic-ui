import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Doctor } from './Doctor';
import { Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
 doctorMail;
  // private addUrl = "http://172.23.239.228:8080/doctor/auth";
  private addUrl = "http://localhost:8080/doctor/auth";

  private secUrl="http://localHost:8081/api/v2/doctor";


  constructor(private http: HttpClient) { }

  registerDoctor(doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.addUrl,doctor);
  }

  login(doctor:Doctor):Observable<any> {
    this.doctorMail = new BehaviorSubject(doctor.doctorEmail).asObservable;
    return this.http.post(this.addUrl+"/login",doctor,{responseType: 'text'});
}

getByEmail(doctorEmail) :Observable<Doctor>
{
return this.http.get<Doctor>(this.secUrl+"/"+doctorEmail);
}

addDoctorDetails(doctor:Doctor):Observable<Doctor>{
  return this.http.post<Doctor>(this.secUrl,doctor);
}
addAddressDeatils(doctor:Doctor):Observable<Doctor>
{
return this.http.post<Doctor>(this.secUrl+"/"+doctor.doctorEmail,doctor);
}

updateDetails(doctor:Doctor):Observable<Doctor>
{
  return this.http.put<Doctor>(this.secUrl+"/"+this.doctorMail,doctor);
}
}