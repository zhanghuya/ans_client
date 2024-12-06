import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { S020Component } from './s020/s020.component';

const routes: Routes = [
  { path: 's020', component: S020Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S020RoutingModule { }
