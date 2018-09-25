
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { TokenStorage} from './tokenStorage';import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{


  constructor(private token:TokenStorage) {}
  

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token.getToken()}`
      }
    });
console.log("reqbody" +JSON.stringify(request.headers))
    return next.handle(request);
  }

}
