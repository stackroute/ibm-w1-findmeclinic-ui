import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Doctor } from './Doctor';
import { Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  // private addUrl = "http://172.23.239.228:8080/doctor/auth";
  private addUrl = "http://localhost:8100/doctor/auth";

  private secUrl="http://localhost:8080/api/v1/search/";
  private thirdUrl="http://localhost:8091/doctor-services/api/v2/doctor/docserv";
  private prescUrl="http://localhost:8091/upstream-service/api/v1/send";
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
// getDoctorByDoctorName(doctorName:string):Observable<Doctor[]>
// {
// //  this.doctor = new BehaviorSubject(doctorName).asObservable();

//   return this.http.get<Doctor[]>(this.secUrl+"/get/"+doctorName);
// }
getDoctorByDoctorName(doctorName:String):Observable<any>{
  return this.http.get<any>(this.secUrl+doctorName);
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

getDoctorEmail(docName:string):Observable<any>{
  return this.http.get(this.addUrl+"/email/"+docName);

}
}