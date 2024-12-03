import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { S003RoutingModule } from './s003-routing.module';
import { F103Component } from './f103/f103.component';
import { F104Component } from './f104/f104.component';
import { S003Component } from './s003/s003.component';
import { GetMasterDataComponent } from '../commons/get-master-data/get-master-data.component';
import { GetMasterUpdateComponent } from '../commons/get-master-update/get-master-update.component';
import { GetMasterPreviewComponent } from '../commons/get-master-preview/get-master-preview.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    S003RoutingModule,
    F103Component,
    F104Component,
    S003Component,
    GetMasterDataComponent,
    GetMasterUpdateComponent,
    GetMasterPreviewComponent
  ]
})
export class S003Module { }
