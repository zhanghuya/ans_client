import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { F103Component } from './f103/f103.component';
import { F104Component } from './f104/f104.component';
import { S003Component } from './s003/s003.component';
import { GetMasterDataComponent } from '../commons/get-master-data/get-master-data.component';
import { GetMasterUpdateComponent } from '../commons/get-master-update/get-master-update.component';
import { GetMasterPreviewComponent } from '../commons/get-master-preview/get-master-preview.component';

const routes: Routes = [
  { path: 'f103', component: F103Component },
  { path: 'f104', component: F104Component },
  { path: 's003', component: S003Component },
  { path: 'get-master-data', component: GetMasterDataComponent },
  { path: 'get-master-update', component: GetMasterUpdateComponent },
  { path: 'get-master-preview', component: GetMasterPreviewComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S003RoutingModule { }
