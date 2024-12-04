import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { S019Component } from './s019/s019.component';

const routes: Routes = [
  { path: 's019', component: S019Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S019RoutingModule { }
