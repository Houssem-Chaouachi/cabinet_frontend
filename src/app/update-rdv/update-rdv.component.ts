import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GererRdvService } from '../service/gerer-rdv.service';

@Component({
  selector: 'app-update-rdv',
  templateUrl: './update-rdv.component.html',
  styleUrls: ['./update-rdv.component.css']
})
export class UpdateRdvComponent implements OnInit {

  updateRdvPatien:FormGroup
  constructor( private _Activatedroute: ActivatedRoute, private formBuilder: FormBuilder, private gererRdv:GererRdvService) { }
  Id = this._Activatedroute.snapshot.paramMap.get('i');

  ngOnInit(): void {
    this.updateRdvPatien = this.formBuilder.group({
      email: [ '', [Validators.required, Validators.email]],
      day: ['', [Validators.required]],
      hour: ['', [Validators.required]]
    });
  }
 updateRdv() {
  this.gererRdv.updateRdv( this.Id , this.updateRdvPatien.value).subscribe();
 }
}
