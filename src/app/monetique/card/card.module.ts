import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { DemandCardComponent } from './demand-card/demand-card.component';


@NgModule({
  declarations: [
    DemandCardComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule
  ]
})
export class CardModule { }
