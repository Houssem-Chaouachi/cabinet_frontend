import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetPasswordService } from '../service/reset-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  resetForm: FormGroup;
  successMessage: string;
  errorMessage: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private reset: ResetPasswordService
    ) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required && Validators.email]],

    });
  }
  RequestResetUser() {
  this.reset.requestReset(this.resetForm.value).subscribe(
    data => {
      this.resetForm.reset();
      this.successMessage = 'Reset password link send to email sucessfully.';
      setTimeout(() => {
        this.successMessage = null;
        this.router.navigate(['login-Patients']);
      }, 3000);
    },
    err => {

      if (err.error.message) {
        this.errorMessage = err.error.message;
      }
    }
  );
}
}
