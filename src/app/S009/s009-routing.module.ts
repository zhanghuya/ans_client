import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { F309Component } from './f309/f309.component';
import { F310Component } from './f310/f310.component';
import { F311Component } from './f311/f311.component';
import { F312Component } from './f312/f312.component';
import { F801Component } from './f801/f801.component';
import { F802Component } from './f802/f802.component';

const routes: Routes = [
  { path: 'f309', component: F309Component },
  { path: 'f310', component: F310Component },
  { path: 'f311', component: F311Component },
  { path: 'f312', component: F312Component },
  { path: 'f801', component: F801Component },
  { path: 'f802', component: F802Component },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S009RoutingModule { }
