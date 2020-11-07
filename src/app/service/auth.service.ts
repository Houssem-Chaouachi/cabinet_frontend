import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenPatient = localStorage.getItem('abcd');
  isLoginPatient = new BehaviorSubject<boolean>(this.patientHastoken());
  isLoginSecretaire = new BehaviorSubject<boolean> (this.secretaireHastoken());
  constructor(private webReqService: WebRequestService) { }
  private patientHastoken(): boolean {
    return !!localStorage.getItem('abcd');
  }
  public patientisAuthenticated(): boolean {
    const token = localStorage.getItem('abcd');
    if (token == null) {
      return false;
    }
    return true;
  }


  private secretaireHastoken(): boolean {
    return !!localStorage.getItem('efgh');
  }
  public secretaireisAuthenticated(): boolean {
    const secretaireToken = localStorage.getItem('efgh');
    if (secretaireToken == null) {
      return false;
    }
    return true;
  }
  registerPatients(patients: string) {
    return this.webReqService.post('patients/register', patients);
  }
  loginPatients(patients: string) {
    return this.webReqService.post('patients/login', patients);
  }
  loginSecretaires(secretaires: string) {
    return this.webReqService.post('secretaires/login', secretaires);
  }
  getPatients() {
    return this.webReqService.get('patients');
  }

  logoutPatient() {
    this.isLoginPatient.next(false);
  }

  logoutSecretaire() {
    this.isLoginSecretaire.next(false);
  }
  secretaireLoggedIn(): Observable<boolean> {
    return this.isLoginSecretaire.asObservable();
  }
  PatientLoggedIn(): Observable<boolean> {
    return this.isLoginPatient.asObservable();
  }
}
