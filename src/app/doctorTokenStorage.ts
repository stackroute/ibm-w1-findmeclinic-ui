import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERID = 'userId';
const DOCTORNAME='doctorName';
const APPOINTMENT = 'appointment';

@Injectable(
 {
   providedIn: 'root'
 }
)
export class DoctorTokenStorage {

 constructor() { }



 public saveToken(token: string) {
   localStorage.removeItem(TOKEN_KEY);
   localStorage.setItem(TOKEN_KEY,  token);
 }

 public removeToken() {
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem(APPOINTMENT);
 
}
   

public saveUserId (userId:string){
  window.localStorage.setItem(USERID,userId);
}

public getUserId(){
  return localStorage.getItem(USERID);
}
 public removeUserId(){
   window.localStorage.removeItem(USERID);
 }


 public saveAppointDetails(appointment){
   window.localStorage.setItem(APPOINTMENT,appointment);
 }

 public getAppDetail(){
   return window.localStorage.getItem(APPOINTMENT);
 }
 
//  public getToken(): string {
//    return localStorage.getItem(TOKEN_KEY);
//  }
}