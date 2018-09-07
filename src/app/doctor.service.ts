import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Doctor } from './Doctor';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private addUrl = "http://localhost:8080/Doctor/Auth";

  constructor(private http: HttpClient) { }

  registerDoctor(doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.addUrl,doctor);
  }

  login(doctor:Doctor):Observable<any> {
    return this.http.post(this.addUrl+"/login",doctor,{responseType: 'text'});
}
}