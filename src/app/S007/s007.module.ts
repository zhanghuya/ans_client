import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { S007RoutingModule } from './s007-routing.module';
import { F303Component } from './f303/f303.component';
import { F304Component } from './f304/f304.component';
import { F305Component } from './f305/f305.component';
import { F306Component } from './f306/f306.component';
import { F307Component } from './f307/f307.component';
import { F308Component } from './f308/f308.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    S007RoutingModule,
    F303Component,
    F304Component,
    F305Component,
    F306Component,
    F307Component,
    F308Component,
  ]
})
export class S007Module { }
