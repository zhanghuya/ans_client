import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { S005RoutingModule } from './s005-routing.module';
import { F109Component } from './f109/f109.component';
import { F110Component } from './f110/f110.component';
import { F111Component } from './f111/f111.component';
import { F112Component } from './f112/f112.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    S005RoutingModule,
    F109Component,
    F110Component,
    F111Component,
    F112Component
  ]
})
export class S005Module { }
