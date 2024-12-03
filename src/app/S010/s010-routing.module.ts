import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { F501Component } from './f501/f501.component';
import { F502Component } from './f502/f502.component';

const routes: Routes = [
  { path: 'f501', component: F501Component },
  { path: 'f502', component: F502Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S010RoutingModule { }
