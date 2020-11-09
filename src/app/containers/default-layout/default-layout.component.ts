import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  patientLoggedIn: Observable<boolean>;
  secretaireLoggedIn: Observable<boolean>;

  public sidebarMinimized = false;
  public navItems = navItems;
constructor(private auth: AuthService, private router: Router) {
  this.patientLoggedIn = auth.PatientLoggedIn();
  this.secretaireLoggedIn = auth.secretaireLoggedIn();
}
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logout() {
    localStorage.removeItem('abcd');
    this.auth.logoutPatient();
    this.router.navigate(['/login-Patients']);

  }
  logoutSecretaire() {
    localStorage.removeItem('efgh');
    this.auth.logoutSecretaire();
    this.router.navigate(['/login-secretaires']);
  }
}
