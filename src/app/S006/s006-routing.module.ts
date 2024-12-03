import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { F301Component } from './f301/f301.component';
import { F302Component } from './f302/f302.component';
import { S006Component } from './s006/s006.component';
const routes: Routes = [
  { path: 'f301', component: F301Component },
  { path: 'f302', component: F302Component },
  { path: 's006', component: S006Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S006RoutingModule { }
