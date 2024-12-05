import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { F401Component } from './f401/f401.component';
import { S008Component } from './s008/s008.component';
const routes: Routes = [
  { path: 'f401', component: F401Component },
  { path: 's008', component: S008Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S008RoutingModule { }
