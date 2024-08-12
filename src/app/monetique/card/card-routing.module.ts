import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandCardComponent } from './demand-card/demand-card.component';
import { AuthGuard } from 'src/app/resgiter/login/AuthGuard';

const routes: Routes = [
  { path: '', component: DemandCardComponent },
  { path: 'request-card', component: DemandCardComponent,  canActivate: [AuthGuard], data: { breadcrumb: { alias: 'request-card' } } },
  
  { path: '**', redirectTo:'', pathMatch: 'full'},

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule { }
