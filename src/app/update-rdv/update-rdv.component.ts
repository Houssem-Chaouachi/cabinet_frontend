import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GererRdvService } from '../service/gerer-rdv.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-update-rdv',
  templateUrl: './update-rdv.component.html',
  styleUrls: ['./update-rdv.component.css']
})
export class UpdateRdvComponent implements OnInit {

  updateRdvPatien: FormGroup;
  constructor( private _Activatedroute: ActivatedRoute,  private gererRdv: GererRdvService) { }
  Id = this._Activatedroute.snapshot.paramMap.get('i');

  ngOnInit(): void {
    this.updateRdvPatien = new FormGroup({
      email: new FormControl( '', [Validators.required, Validators.email]),
      day: new FormControl( '', [Validators.required]),
      hour: new FormControl ( '', [Validators.required])
    });
  }
 updateRdv() {
  this.gererRdv.updateRdv( this.Id , this.updateRdvPatien.value).subscribe(
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your RDV has been updated',
      showConfirmButton: false,
      timer: 1500
    })
     );
 }
}
