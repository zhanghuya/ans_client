// src/app/S002/s002-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { F101Component } from './f101/f101.component';
import { F102Component } from './f102/f102.component';

const routes: Routes = [
  { path: 'f101', component: F101Component },
  { path: 'f102', component: F102Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S002RoutingModule {}
