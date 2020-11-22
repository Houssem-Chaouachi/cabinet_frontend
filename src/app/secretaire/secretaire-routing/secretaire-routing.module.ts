import { NgModule } from '@angular/core';
import { ListeRdvComponent } from '../liste-rdv/liste-rdv.component';
import { RouterModule, Routes } from '@angular/router';
import { DemandeRdvComponent } from '../demande-rdv/demande-rdv.component';
import { DateRdvComponent } from '../../date-rdv/date-rdv.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Secretaire'
    },
    children: [
      {
        path: '',
        redirectTo: 'demande-rdv'
      },
      {
        path: 'demande-rdv/:id',
        component: DemandeRdvComponent,
        data: {
          title: 'demande RDV'
        }
      },
      {
        path: 'liste-rdv',
        component: ListeRdvComponent,
        data: {
          title: 'liste RDV'
        }
      },
      {
        path: 'date-rdv/:i',
        component: DateRdvComponent,
        data: {
          title: 'date RDV'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]


})
export class SecretaireRoutingModule { }
