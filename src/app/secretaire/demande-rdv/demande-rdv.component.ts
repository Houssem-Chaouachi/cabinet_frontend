import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GererRdvService } from '../../service/gerer-rdv.service';

@Component({
  selector: 'app-demande-rdv',
  templateUrl: './demande-rdv.component.html',
  styleUrls: ['./demande-rdv.component.css']
})
export class DemandeRdvComponent implements OnInit {
email: String = 'houssem@gmail.com';
index: number;
  constructor(private gérerRv: GererRdvService, private _activatedroute: ActivatedRoute) { }
listeDemande: any[];
_idSecretaire: string;
  ngOnInit(): void {
    // this._activatedroute.params.subscribe((paramS: Params) => {
      this._idSecretaire = this._activatedroute.snapshot.paramMap.get('id');
      // console.log( 'haha', paramS);
     console.log('idSec', this._idSecretaire);

    // });
      this.gérerRv.getpatients(this._idSecretaire).subscribe((liste: any[]) => {
        this.listeDemande = liste;
        console.log('patientsloooooo:', this.listeDemande);
      });
  }

  }
