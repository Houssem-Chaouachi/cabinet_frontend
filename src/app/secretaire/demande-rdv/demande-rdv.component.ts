import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demande-rdv',
  templateUrl: './demande-rdv.component.html',
  styleUrls: ['./demande-rdv.component.css']
})
export class DemandeRdvComponent implements OnInit {
email: String = 'houssem@gmail.com';
  constructor() { }

  ngOnInit(): void {
  }

}
