import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { F303Component } from './f303/f303.component';
import { F304Component } from './f304/f304.component';
import { F305Component } from './f305/f305.component';
import { F306Component } from './f306/f306.component';
import { F307Component } from './f307/f307.component';
import { F308Component } from './f308/f308.component';
const routes: Routes = [
  { path: 'f303', component: F303Component },
  { path: 'f304', component: F304Component },
  { path: 'f305', component: F305Component },
  { path: 'f306', component: F306Component },
  { path: 'f307', component: F307Component },
  { path: 'f308', component: F308Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S007RoutingModule { }
