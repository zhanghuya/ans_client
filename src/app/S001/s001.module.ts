import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { S001RoutingModule } from './s001-routing.module';
import { S001Component } from './s001/s001.component';
import { LibsModule } from '../libs/libs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LibsModule,
    ReactiveFormsModule,
    S001RoutingModule,
    S001Component
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' }  // 设置日期选择器为日语模式
  ],
})
export class S001Module { }
