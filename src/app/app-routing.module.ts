import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {PrestaComponent} from "./presta/presta.component";
import {ReaComponent} from "./rea/rea.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path: 'accueil', component:AccueilComponent},
  {path: 'prestations', component:PrestaComponent},
  {path: 'realisations', component:ReaComponent},
  {path: 'contact', component:ContactComponent},

  {path: '', component:AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
