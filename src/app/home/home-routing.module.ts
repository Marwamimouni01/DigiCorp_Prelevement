import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { MonetiqueComponent } from '../monetique/monetique.component';
import { CardComponent } from '../monetique/card/card.component';
import { CreditModule } from '../credit/credit.module';
import { CreditComponent } from '../credit/credit.component';

const routes: Routes = [
  {path:'', component: HomeComponent ,
        children: [
            { path: '', component: DashboardComponent, data: { breadcrumb: 'Dashboard' }},
            { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: 'Dashboard' }},
            { path: 'monetique', component: MonetiqueComponent, data: { breadcrumb: 'monetique' }},
            { path: 'credit', component: CreditComponent, data: { breadcrumb: 'credit' }},

            { path: 'credit', loadChildren: () => import('./../credit/credit.module').then(mod => mod.CreditModule), data: { breadcrumb: 'Crédit' } },
            { path: 'monetique', loadChildren: () => import('./../monetique/monetique.module').then(mod => mod.MonetiqueModule), data: { breadcrumb: 'Monetique' } },
            { path: 'card', component: CardComponent, data: { breadcrumb: 'card' }},
            { path: 'card', loadChildren: () => import('./../monetique/card/card.module').then(mod => mod.CardModule), data: { breadcrumb: 'Card' } },

           { path: 'user', loadChildren: () => import('./../user/user.module').then(mod => mod.UserModule), data: { breadcrumb: 'Profile' } },

       
            { path: '**', redirectTo: '', pathMatch: 'full' },

        ],
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
