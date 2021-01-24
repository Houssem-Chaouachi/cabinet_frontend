import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class GererRdvService {

  constructor(private webReqService: WebRequestService) { }
  getListSecretaires() {
    return this.webReqService.get('secretaires');
  }
  demanderRdv( idpatients: string, data: object) {
    return this.webReqService.post(`secretaires/affect-patients-to-secretaire/${idpatients}`, data);
  }
  refuseRDV(idpatients:string) {
    return this.webReqService.delete(`secretaires/remove-patients-from-secretaire/${idpatients}`)
  }
getpatients() {
  return this.webReqService.get(`secretaires/request-from-patients`);
}
getPatientsById(id) {
  return this.webReqService.get(`patients/${id}`);
}
sendMail( data: object) {
  return this.webReqService.post(`send-Rdv-time`, data);
}

getRdv() {
  return this.webReqService.get('send-Rdv-time/listeRdv');
}
getRdvById(id){
  return this.webReqService.get(`send-Rdv-time/listeRdv/${id}`)
}

deleteRdvAccepted(id) {
  return this.webReqService.delete(`send-Rdv-time/listeRdv/${id}`);
}

updateRdv(id: string, body: object) {
  return this.webReqService.put(`send-Rdv-time/listeRdv/${id}`, body);
}
}
