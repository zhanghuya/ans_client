import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetMasterDataComponent } from './get-master-data/get-master-data.component';
import { GetMasterUpdateComponent } from './get-master-update/get-master-update.component';
import { GetMasterPreviewComponent } from './get-master-preview/get-master-preview.component';

const routes: Routes = [
  { path: 'get-master-data', component: GetMasterDataComponent },
  { path: 'get-master-update', component: GetMasterUpdateComponent },
  { path: 'get-master-preview', component: GetMasterPreviewComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonsRoutingModule { }
