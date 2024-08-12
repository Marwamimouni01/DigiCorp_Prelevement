import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionprelevementRoutingModule } from './gestionprelevement-routing.module';
import { DemandePrelevementComponent } from './demande-prelevement/demande-prelevement.component';
import { GestionprelevementComponent } from './gestionprelevement.component';


@NgModule({
  declarations: [
    DemandePrelevementComponent,
    GestionprelevementComponent
  ],
  imports: [
    CommonModule,
    GestionprelevementRoutingModule
  ]
})
export class GestionprelevementModule { }
