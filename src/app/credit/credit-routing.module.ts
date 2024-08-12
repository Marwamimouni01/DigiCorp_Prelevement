import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditComponent } from './credit.component';
import { GestionprelevementComponent } from './gestionprelevement/gestionprelevement.component';





const routes: Routes = [
  { path: 'gestionprelevement', loadChildren: () => import('./../credit/gestionprelevement/gestionprelevement.module').then(mod => mod.GestionprelevementModule), data: { breadcrumb: 'Gestion prélèvement' } },
  {path:'**', redirectTo:'not-found', pathMatch: 'full'},

];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditRoutingModule { }
