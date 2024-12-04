import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { F601Component } from './f601/f601.component';
import { S011Component } from './s011/s011.component';
const routes: Routes = [
  { path: 'f601', component: F601Component },
  { path: 's011', component: S011Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S011RoutingModule { }
