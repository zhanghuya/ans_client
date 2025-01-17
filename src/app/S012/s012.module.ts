import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { S012RoutingModule } from './s012-routing.module';
import { F701Component } from './f701/f701.component';
import { F702Component } from './f702/f702.component';
import { S012Component } from './s012/s012.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    S012RoutingModule,
    S012Component,
    F701Component,
    F702Component,
  ]
})
export class S012Module { }
