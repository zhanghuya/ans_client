import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { F109Component } from './f109/f109.component';
import { F110Component } from './f110/f110.component';
import { F111Component } from './f111/f111.component';
import { F112Component } from './f112/f112.component';
import { S005Component } from './s005/s005.component';
const routes: Routes = [
  { path: 'f109', component: F109Component },
  { path: 'f110', component: F110Component },
  { path: 'f111', component: F111Component },
  { path: 'f112', component: F112Component },
  { path: 's005', component: S005Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S005RoutingModule { }
