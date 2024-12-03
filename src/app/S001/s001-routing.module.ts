import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { S001Component } from './s001/s001.component';

const routes: Routes = [
  { path: 's001', component: S001Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S001RoutingModule { }
