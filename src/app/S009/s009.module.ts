import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { S009RoutingModule } from './s009-routing.module';
import { F309Component } from './f309/f309.component';
import { F310Component } from './f310/f310.component';
import { F311Component } from './f311/f311.component';
import { F312Component } from './f312/f312.component';
import { F801Component } from './f801/f801.component';
import { F802Component } from './f802/f802.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    S009RoutingModule,
    F309Component,
    F310Component,
    F311Component,
    F312Component,
    F801Component,
    F802Component,
  ]
})
export class S009Module { }
