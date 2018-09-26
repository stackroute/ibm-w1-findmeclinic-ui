import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private firstUrl="http://localhost:8081/api/v1/notify";
  constructor(private http:HttpClient) { }
  notificationObj:Notification;
sendNotification(notificationObj):Observable<Notification>{
  return this.http.post<Notification>(this.firstUrl,notificationObj);

}

getPatientNotification(mail:string):Observable<Notification>
{
  console.log("gh123")
return this.http.get<Notification>(this.firstUrl+"/patient"+"/"+mail);
}

getDoctorNotification(mail:string):Observable<Notification>
{
  console.log("dh123")
return this.http.get<Notification>(this.firstUrl+"/doctor"+"/"+mail);

}
}
