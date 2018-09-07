import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
 HttpResponse, HttpUserEvent, HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import {TokenStorage} from './tokenStorage';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable(
 {
   providedIn: 'root'

 }
)
export class Interceptor implements HttpInterceptor {

 constructor(private token: TokenStorage, private router: Router) { }

 intercept(req: HttpRequest<any>, next: HttpHandler):
   Observable <HttpUserEvent<any>> {
   let authReq = req;
   if (this.token.getToken() != null) {
     authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this .token.getToken())});
   }
   return next.handle(authReq).do(
       (err: any) => {
         if (err instanceof HttpErrorResponse) {

           if (err.status === 409) {
             this.router.navigate(['patient-profile']);
           }
         }
       }
     );
 }

}