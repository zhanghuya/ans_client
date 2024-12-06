import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { S024Component } from './s024/s024.component';

const routes: Routes = [
  { path: 's024', component: S024Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S024RoutingModule { }
