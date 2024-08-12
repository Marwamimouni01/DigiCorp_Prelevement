import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { AuthGuard } from '../resgiter/login/AuthGuard';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'card', component: CardComponent,  canActivate: [AuthGuard], data: { breadcrumb: { alias: 'card' } } },
  
  { path: '**', redirectTo:'', pathMatch: 'full'},

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonetiqueRoutingModule { }
