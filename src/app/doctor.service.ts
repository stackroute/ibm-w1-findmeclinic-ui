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
  // private secUrl="http://localHost:8082/api/v2/doctor";

  private secUrl="http://localhost:8080/api/v1/search/";
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
return this.http.get<Doctor>(this.secUrl+"/"+doctorEmail);
}
// getDoctorByDoctorName(doctorName:string):Observable<Doctor[]>
// {
// //  this.doctor = new BehaviorSubject(doctorName).asObservable();

//   return this.http.get<Doctor[]>(this.secUrl+"/get/"+doctorName);
// }
getDoctorByDoctorName(doctorName:String):Observable<any>{
  return this.http.get<any>(this.secUrl+doctorName);

}

addDoctorDetails(doctor:Doctor):Observable<Doctor>{
  return this.http.post<Doctor>(this.secUrl,doctor);
}
addAddressDeatils(doctor:Doctor):Observable<Doctor>
{
return this.http.post<Doctor>(this.secUrl+"/"+doctor.doctorEmail,doctor);
}

updateDetails(doctor):Observable<Doctor>
{
  return this.http.put<Doctor>(this.secUrl+"/"+doctor.doctorMail,doctor);
}


getBadge(doctorEmail:string):Observable<any>{
  return this.http.get(this.secUrl+"/badge/"+doctorEmail,{responseType:'text'});
}
}