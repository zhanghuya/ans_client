import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { F105Component } from './f105/f105.component';
import { F106Component } from './f106/f106.component';
import { F107Component } from './f107/f107.component';
import { F108Component } from './f108/f108.component';
import { F201Component } from './f201/f201.component';
import { S004Component } from './s004/s004.component';

const routes: Routes = [
  { path: 'f105', component: F105Component },
  { path: 'f106', component: F106Component },
  { path: 'f107', component: F107Component },
  { path: 'f108', component: F108Component },
  { path: 'f201', component: F201Component },
  { path: 's004', component: S004Component },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S004RoutingModule { }
