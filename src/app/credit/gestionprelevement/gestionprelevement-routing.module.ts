import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionprelevementComponent } from './gestionprelevement.component';
import { DemandePrelevementComponent } from './demande-prelevement/demande-prelevement.component';




const routes: Routes = [
  { path: '', component: GestionprelevementComponent },
  { path: 'demandeprelevement', component: DemandePrelevementComponent, data: { breadcrumb: 'Demande prélèvement' }},
  { path: '**' , redirectTo:'', pathMatch: 'full'},
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionprelevementRoutingModule { }
