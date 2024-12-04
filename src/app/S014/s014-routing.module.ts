import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { S014Component } from './s014/s014.component';

const routes: Routes = [
  { path: 's014', component: S014Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S014RoutingModule { }
