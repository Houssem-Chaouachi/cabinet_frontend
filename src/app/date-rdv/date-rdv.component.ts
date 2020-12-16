import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GererRdvService } from '../service/gerer-rdv.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-date-rdv',
  templateUrl: './date-rdv.component.html',
  styleUrls: ['./date-rdv.component.css']
})
export class DateRdvComponent implements OnInit {
  rdvPatien: FormGroup;
  index;
  selectedPatient;
  successMessage: string;
  errorMessage: string;
  constructor( private _Activatedroute: ActivatedRoute, private gererRdv: GererRdvService) { }

  ngOnInit(): void {
    this.index = this._Activatedroute.snapshot.paramMap.get('i');
   this.rdvPatien = new FormGroup ({
     email: new FormControl('', [Validators.required, Validators.email]),
     day: new FormControl('', [Validators.required]),
     hour: new FormControl('', [Validators.required])
   });
  }
sendMail() {
  if (this.rdvPatien.valid) {

    this.gererRdv.sendMail(this.rdvPatien.value).subscribe(data => {
  this.successMessage = 'rdv send to patient succesfully';
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  });
    }
   );
  }
  else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    });
  }
}
}
