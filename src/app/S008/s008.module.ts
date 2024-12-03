import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { S008RoutingModule } from './s008-routing.module';
import { F401Component } from './f401/f401.component';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    S008RoutingModule,
    F401Component,
  ]
})
export class S008Module { }
