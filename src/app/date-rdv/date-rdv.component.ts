import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GererRdvService } from '../service/gerer-rdv.service';

@Component({
  selector: 'app-date-rdv',
  templateUrl: './date-rdv.component.html',
  styleUrls: ['./date-rdv.component.css']
})
export class DateRdvComponent implements OnInit {
  rdvPatien: FormGroup;
  index;
  successMessage: string;
  errorMessage: string;
  constructor(private formBuilder: FormBuilder, private _Activatedroute: ActivatedRoute, private gererRdv: GererRdvService) { }

  ngOnInit(): void {
    this.index = this._Activatedroute.snapshot.paramMap.get('i');
   this.rdvPatien = this.formBuilder.group({
     email: [ '', [Validators.required, Validators.email]],
     day: ['', [Validators.required]],
     hour: ['', [Validators.required]]
   });
  }
sendMail() {
  this.gererRdv.sendMail(this.rdvPatien.value).subscribe(data => {
this.successMessage = 'rdv send to patient succesfully';
  },
  err => {
    if (err.error.message) {
    this.errorMessage = err.error.message;
  }
  }
  );
}
}
