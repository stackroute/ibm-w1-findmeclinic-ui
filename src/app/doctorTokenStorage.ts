import { Injectable } from '@angular/core';


const TOKEN_KEY = 'AuthToken';
const USERID = 'userId';

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

//  public getToken(): string {
//    return localStorage.getItem(TOKEN_KEY);
//  }


}
