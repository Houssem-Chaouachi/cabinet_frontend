import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-date-rdv',
  templateUrl: './date-rdv.component.html',
  styleUrls: ['./date-rdv.component.css']
})
export class DateRdvComponent implements OnInit {
  rdvPatien: FormGroup;
  index;
  constructor(private formBuilder:FormBuilder, private _Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.index = this._Activatedroute.snapshot.paramMap.get('i');
   this.rdvPatien = this.formBuilder.group({
     email: ['', [Validators.required, Validators.email]],
     day: ['', [Validators.required]],
     hour: ['', [Validators.required]]
   });
  }

}
