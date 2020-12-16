import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GererRdvService } from '../service/gerer-rdv.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-update-rdv',
  templateUrl: './update-rdv.component.html',
  styleUrls: ['./update-rdv.component.css']
})
export class UpdateRdvComponent implements OnInit {
  Id: string;
  updateRdvPatien: FormGroup;
  constructor(private _Activatedroute: ActivatedRoute, private router: Router, private gererRdv: GererRdvService) { }

  ngOnInit(): void {
    this.Id = this._Activatedroute.snapshot.paramMap.get('i');
    this.updateRdvPatien = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      day: new FormControl('', [Validators.required]),
      hour: new FormControl('', [Validators.required])
    });
  }
  updateRdv() {
    this.gererRdv.updateRdv(this.Id, this.updateRdvPatien.value).subscribe(
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your RDV has been updated',
      showConfirmButton: false,
      timer: 1500
    })
    );
      this.router.navigateByUrl(`/secretaire/demande-rdv`);
    }
}
