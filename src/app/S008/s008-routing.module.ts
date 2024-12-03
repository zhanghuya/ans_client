import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { F401Component } from './f401/f401.component';

const routes: Routes = [
  { path: 'f401', component: F401Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S008RoutingModule { }
