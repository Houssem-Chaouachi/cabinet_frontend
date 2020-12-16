import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GererRdvService } from '../../service/gerer-rdv.service';
import * as jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-demande-rdv',
  templateUrl: './demande-rdv.component.html',
  styleUrls: ['./demande-rdv.component.css']
})
export class DemandeRdvComponent implements OnInit {
index: number;
  constructor(private gérerRv: GererRdvService, private _activatedroute: ActivatedRoute) { }
listeDemande: any[];
_idSecretaire: string;
  ngOnInit(): void {

      this._idSecretaire = this._activatedroute.snapshot.paramMap.get('id');
      // console.log( 'haha', paramS);
     console.log('idSec', this._idSecretaire);

    // });
      this.gérerRv.getpatients().subscribe((liste: any[]) => {
        this.listeDemande = liste;
        console.log('patientsloooooo:', this.listeDemande);
      });
  }
  refuseRdv(i, id) {
    this.gérerRv.refuseRDV(id).subscribe(() => {

Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    this.listeDemande.splice(i, 1);
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )}
});
    });
  }
  }
