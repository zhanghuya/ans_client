import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { F601Component } from './f601/f601.component';
const routes: Routes = [
  { path: 'f601', component: F601Component },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S011RoutingModule { }
