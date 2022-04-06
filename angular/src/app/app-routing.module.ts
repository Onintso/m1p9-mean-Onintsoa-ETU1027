import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ModifierComponent } from './modifier/modifier.component';
import { AjoutComponent } from './ajout/ajout.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'modifier', component: ModifierComponent },
  { path: 'ajout', component: AjoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
