import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { S004RoutingModule } from './s004-routing.module';
import { F105Component } from './f105/f105.component';
import { F106Component } from './f106/f106.component';
import { F107Component } from './f107/f107.component';
import { F108Component } from './f108/f108.component';
import { F201Component } from './f201/f201.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    S004RoutingModule,
    F105Component,
    F106Component,
    F107Component,
    F108Component,
    F201Component
  ]
})
export class S004Module { }
