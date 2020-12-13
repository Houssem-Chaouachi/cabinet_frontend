import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {  AuthService } from '../app/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterseptorService  implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req, next) {
    let authservice = this.injector.get(AuthService);
    let tokenizedReq = req.clone({
      setHeaders : {
        Authorization: `Bearer ${authservice.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
// hetha raw ? 
// imchi lel interseptor.ts il 3maltou ena tawou