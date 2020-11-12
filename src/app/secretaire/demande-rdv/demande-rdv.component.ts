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
  constructor(private gérerRv: GererRdvService, private _activatedroute: ActivatedRoute) { }
listeDemande: any ;
_idSecretaire;
  ngOnInit(): void {
    this._activatedroute.params.subscribe((paramS: Params) => {
      this._idSecretaire = '5fa05c223fe0bb412c0d5038';
      console.log( 'haha', paramS);
     console.log('idSec', this._idSecretaire);

    });
      this.gérerRv.getpatients(this._idSecretaire).subscribe((liste: any[]) => {
        this.listeDemande = liste;
        console.log('patientsloooooo:', this.listeDemande);
      });
  }

  }
