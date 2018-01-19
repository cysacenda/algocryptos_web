import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CryptokpisComponent} from "./cryptokpis/cryptokpis.component";
import {GlobalkpisComponent} from "./globalkpis/globalkpis.component";

const routes: Routes = [
  { path: '', redirectTo: '/cryptokpis', pathMatch: 'full' },
  { path: 'cryptokpis', component: CryptokpisComponent },
  { path: 'globalkpis', component: GlobalkpisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
