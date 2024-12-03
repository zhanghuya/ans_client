import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { F701Component } from './f701/f701.component';
import { F702Component } from './f702/f702.component';

const routes: Routes = [
  { path: 'f701', component: F701Component },
  { path: 'f702', component: F702Component },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S012RoutingModule { }
