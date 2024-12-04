import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { S013Component } from './s013/s013.component';

const routes: Routes = [
  { path: 's013', component: S013Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S013RoutingModule { }
