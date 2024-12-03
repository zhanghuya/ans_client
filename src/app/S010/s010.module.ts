import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { S010RoutingModule } from './s010-routing.module';
import { F501Component } from './f501/f501.component';
import { F502Component } from './f502/f502.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    S010RoutingModule,
    F501Component,
    F502Component,
  ]
})
export class S010Module { }
