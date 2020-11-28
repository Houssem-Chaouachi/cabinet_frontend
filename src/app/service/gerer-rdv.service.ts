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
  demanderRdv(idSecretaire: string, idpatients: string, data: object) {
    return this.webReqService.post(`secretaires/affect-patients-to-secretaire/${idSecretaire}/${idpatients}`, data);
  }
getpatients(id: string) {
  return this.webReqService.get(`secretaires/${id}`);
}
sendMail( data: object) {
  return this.webReqService.post(`send-Rdv-time`, data);
}

getRdv() {
  return this.webReqService.get('send-Rdv-time/listeRdv');
}

deleteRdv(id) {
  return this.webReqService.delete(`send-Rdv-time/listeRdv/${id}`);
}

updateRdv(id, body){
  return this.webReqService.put(`send-Rdv-time/listeRdv/${id}`, body);
}
}
