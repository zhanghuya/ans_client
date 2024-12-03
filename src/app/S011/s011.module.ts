import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { S011RoutingModule } from './s011-routing.module';
import { F601Component } from './f601/f601.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    S011RoutingModule,
    F601Component,

  ]
})
export class S011Module { }
