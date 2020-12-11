import { Component, OnInit } from '@angular/core';
import { GererRdvService } from '../../service/gerer-rdv.service';

@Component({
  selector: 'app-liste-rdv',
  templateUrl: './liste-rdv.component.html',
  styleUrls: ['./liste-rdv.component.css']
})
export class ListeRdvComponent implements OnInit {
 acceptedPatients: any [];

  constructor(private gererRdv: GererRdvService) { }

  ngOnInit(): void {

   this.gererRdv.getRdv().subscribe((liste: []) => {
     this.acceptedPatients = liste;
     console.log('accepted Pattient', this.acceptedPatients);

   });
  }
 deletePatient(i, id) {
   this.gererRdv.deleteRdvAccepted(id).subscribe(() => {
     this.acceptedPatients.slice(i, 1);
   });
 }
}
