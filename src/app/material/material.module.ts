import { NgModule } from '@angular/core';


// import { ModalModule } from './_modal';
import { MatBadgeModule } from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
// import {MatButtonModule} from '@angular/material/button';

const Material = [

  MatBadgeModule,
  MatInputModule,
  ReactiveFormsModule,
  // ModalModule
];

@NgModule({
  imports: [Material, ],
  exports: [Material, ]
})
export class MaterialModule { }
