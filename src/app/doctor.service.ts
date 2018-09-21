import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Doctor } from './Doctor';
import { Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  // private addUrl = "http://172.23.239.228:8080/doctor/auth";
  private addUrl = "http://localhost:8080/doctor/auth";

  private secUrl="http://localHost:8080/api/v1/search";

  private thirdUrl="http://localHost:8081/api/v2/doctor/docserv"
  constructor(private http: HttpClient) { }
  doctor;

  registerDoctor(doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.addUrl,doctor);
  }

  login(doctor:Doctor):Observable<any> {
    //this.doctorMail = new BehaviorSubject(doctor.doctorEmail).asObservable();
    return this.http.post(this.addUrl+"/login",doctor,{responseType: 'text'});
}
  



getByEmail(doctorEmail) :Observable<Doctor>
{
return this.http.get<Doctor>(this.thirdUrl+"/"+doctorEmail);
}
getDoctorByDoctorName(doctorName:string):Observable<any>
{
  // this.doctor = new BehaviorSubject(doctorName).asObservable();

  return this.http.get<any>(this.thirdUrl+doctorName);
}

addDoctorDetails(doctor:Doctor):Observable<Doctor>{
  return this.http.post<Doctor>(this.thirdUrl,doctor);
}
addAddressDeatils(doctor:Doctor):Observable<Doctor>
{
return this.http.post<Doctor>(this.thirdUrl+"/"+doctor.doctorEmail,doctor);
}

updateDetails(doctor):Observable<Doctor>
{
  return this.http.put<Doctor>(this.thirdUrl+"/"+doctor.doctorMail,doctor);
}


getBadge(doctorEmail:string):Observable<any>{
  return this.http.get(this.thirdUrl+"/badge/"+doctorEmail,{responseType:'text'});
}
}