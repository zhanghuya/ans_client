import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { S006RoutingModule } from './s006-routing.module';
import { F301Component } from './f301/f301.component';
import { F302Component } from './f302/f302.component';
import { S006Component } from './s006/s006.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    S006RoutingModule,
    F301Component,
    F302Component,
    S006Component
  ]
})
export class S006Module { }
