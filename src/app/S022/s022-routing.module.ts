import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { S022Component } from './s022/s022.component';
const routes: Routes = [
  { path: 's022', component: S022Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S022RoutingModule { }
