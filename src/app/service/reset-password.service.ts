import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor( private webReqService: WebRequestService) { }

  requestReset(body): Observable<any> {
    return this.webReqService.post('email/req-reset-password', body);
  }

  newPassword(body): Observable<any> {
    return this.webReqService.post('email/new-password', body);
  }

  ValidPasswordToken(body): Observable <any> {
  return this.webReqService.post('email/valid-password-token', body);
  }
}
