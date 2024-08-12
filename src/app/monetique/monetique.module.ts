import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonetiqueRoutingModule } from './monetique-routing.module';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    MonetiqueRoutingModule
  ]
})
export class MonetiqueModule { }
