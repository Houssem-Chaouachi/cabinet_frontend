import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    // ou tawou jarabha
    // ok 
    //  oui tawa mrigla el secretaire 
    //  fama 7aja bark aw besh nsaarha bel tel w nab3thlk 3al fb 
    // ok
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      const token = localStorage.getItem('efgh');

      // tslint:disable-next-line: triple-equals
      if (token != null && token != undefined) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
        return next.handle(req);
      } else { return next.handle(req); }
    }
  }
// aw besh njareb ntasi, w el module akkeka n7ot fih ?
// behi imchi tawou lel app.module