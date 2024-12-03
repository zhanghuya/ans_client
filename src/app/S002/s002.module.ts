// src/app/S002/s002.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { S002RoutingModule } from './s002-routing.module';
import { F101Component } from './f101/f101.component';
import { F102Component } from './f102/f102.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    S002RoutingModule,
    F101Component,
    F102Component
  ]
})
export class S002Module {}
