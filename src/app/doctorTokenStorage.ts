import { Injectable } from '@angular/core';


const TOKEN_KEY = 'AuthToken';

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

 public getToken(): string {
   return localStorage.getItem(TOKEN_KEY);
 }
}
