import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SecretaireRoutingModule } from '../secretaire-routing/secretaire-routing.module';
import { ListeRdvComponent } from '../liste-rdv/liste-rdv.component';
import { DemandeRdvComponent } from '../demande-rdv/demande-rdv.component';



@NgModule({
  imports: [ SecretaireRoutingModule ],
  declarations: [
    ListeRdvComponent,
    DemandeRdvComponent
  ]
})
export class SecretaireModule { }
