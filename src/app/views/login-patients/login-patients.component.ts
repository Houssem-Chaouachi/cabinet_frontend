import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-login-patients',
  templateUrl: './login-patients.component.html',
  styleUrls: ['./login-patients.component.css']
})
export class LoginPatientsComponent implements OnInit {
  LoginPatients: FormGroup;
  submitted = false;
  idpatients;

  constructor(private formbuilder: FormBuilder,
     private auth: AuthService, private router: Router,
      private _activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.LoginPatients = this.formbuilder.group({
      email: ['', [Validators.required && Validators.email]],
      password: ['', [Validators.required && Validators.minLength(8)]]
    });

  }
  get form() {
    return this.LoginPatients.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.LoginPatients.invalid) {
      return;
    }
  }
  login() {
    this.auth.loginPatients(this.LoginPatients.value).subscribe(
      (res: any) => {
        console.log(res.id);
        localStorage.setItem('abcd', res);
        this.router.navigateByUrl(`/dashboard/${res.id}`);
         this.idpatients = res.id;
        //  if (!res.id) {
        //   localStorage.removeItem('abcd')
        //  }
        });
  }
}
