// src/app/S002/s002-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { F101Component } from './f101/f101.component';
import { F102Component } from './f102/f102.component';
import { S002Component } from './s002/s002.component';

const routes: Routes = [
  { path: 's002', component: S002Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S002RoutingModule {}
