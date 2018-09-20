import { Injectable } from '@angular/core';


const TOKEN_KEY = 'AuthToken';
const USERID ='userIdentity';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class TokenStorage {

  constructor() { }

  public saveUserId(userId:string)
  {
    window.localStorage.setItem(USERID,userId);
  }
  public getUserId()
  {
    return localStorage.getItem(USERID);
  }
  public removeUserId()
  {
    window.localStorage.removeItem(USERID);

  }
  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY,  token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public removeToken() {
    window.localStorage.removeItem(TOKEN_KEY);
   
  }
}
