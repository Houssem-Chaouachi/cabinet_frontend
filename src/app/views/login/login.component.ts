import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  loginSecretaires: FormGroup;
  submitted = false;


  constructor(private formbuilder: FormBuilder, private auth: AuthService, private router: Router) { }


 ngOnInit () {
    this.loginSecretaires = this.formbuilder.group({
      email: ['', [Validators.required && Validators.email]],
      password: ['', [Validators.required && Validators.minLength(8)]]
    });
  }
  get form() {
    return this.loginSecretaires.controls;
  }

  onSubmit() {
    console.log(this.form);
    this.submitted = true;
    if (this.loginSecretaires.invalid) {
      return;
    }
  }
  login() {
    this.auth.loginSecretaires(this.loginSecretaires.value).subscribe((res: any) => {

          localStorage.setItem('efgh', res.token);
        this.router.navigateByUrl(`/secretaire/demande-rdv/${res.id}`);
        console.log(res.id);

if (!res.id) {
  localStorage.removeItem('efgh');
}
}

    );
  }
}
