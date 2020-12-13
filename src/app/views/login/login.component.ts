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


  constructor( private auth: AuthService, private router: Router) { }


 ngOnInit () {
    this.loginSecretaires = new FormGroup({
      email: new  FormControl ('', [Validators.required && Validators.email]),
      password: new FormControl( '', [Validators.required && Validators.minLength(8)])
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
        this.router.navigateByUrl(`/secretaire/demande-rdv`);
        console.log('hhhhhhh', res.token);
// ahaya
// jareb ou 9oli fel consol chitala3
// ok
//  {success: true, token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXRpZW50c…TIxfQ.hXl8EbhdEwi8w2lcSvAtjyGtGk785LwcUj6nheQCHvg", id: "5fd34e4b112bda1798d3d4a2"}
// trah jareb
// yekhou fel token 
// local storege mafihech wa7 da khana3mel tala3 a3al eservice belekshi badalt 7aja w nsit khater haka normalement s7i7a wala lé ?
// localstorge mafihech wa7da ismha efgh
//  ey ey 9a3ed yekhou feha tawa fel local am fel network mahish mawjouda

}

    );
  }
}
