import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from '../../Helper/must-match.validator';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './register.component.html',

})
export class RegisterComponent {
  hide = true;
  registerPatient: FormGroup;
  patientsListe: any[];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) { }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit () {
    this.registerPatient = this.formBuilder.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      adresse: ['', [Validators.required]],
      tel: ['', [Validators.required,
      Validators.maxLength(8),
        Validators.minLength(8),  Validators.pattern('^[0-9]*$')]],
      dateDeNaissance: ['', [Validators.required]],
      sexe: ['', [Validators.required]],
      password: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+$'),
        Validators.minLength(8),
      ]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  this.auth.getPatients().subscribe((liste: any[]) => {
    this.patientsListe = liste;
    console.log('Liste Patients', this.patientsListe);
  });
  }
  get form() { return this.registerPatient.controls; }
  // faire click button sur creat account

  register(patients) {
this.auth.registerPatients(this.registerPatient.value).subscribe(() => {
  this.router.navigate(['/login-Patients']);
patients = this.registerPatient.value;
console.log(patients);

},
(err) => {
  return this.toastr.warning(err.error.message);
}
);
    // this.router.navigate(["/login"]);
    // this.toastr.success("Account Created Successfully");
    // (err) => {
    //   this.router.navigate(["/register"]);
    //  return this.toastr.warning(err.error.message);


  }
}

