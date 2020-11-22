import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecretaireRoutingModule } from '../secretaire-routing/secretaire-routing.module';
import { ListeRdvComponent } from '../liste-rdv/liste-rdv.component';
import { DemandeRdvComponent } from '../demande-rdv/demande-rdv.component';
import { BrowserModule } from '@angular/platform-browser';
import { DateRdvComponent } from '../../date-rdv/date-rdv.component';



@NgModule({
  imports: [ 
    SecretaireRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
   ],
  declarations: [
    ListeRdvComponent,
    DemandeRdvComponent,
    DateRdvComponent
  ]
})
export class SecretaireModule { }
