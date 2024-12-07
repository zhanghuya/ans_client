import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { GetMasterDataComponent } from './get-master-data/get-master-data.component';
import { GetMasterUpdateComponent } from './get-master-update/get-master-update.component';
import { GetMasterPreviewComponent } from './get-master-preview/get-master-preview.component';
import { PopupTemporarySaveComponent } from './popup-temporary-save/popup-temporary-save.component';
import { DrpTableComponent } from './drp-table/drp-table.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonsRoutingModule,
    GetMasterDataComponent,
    GetMasterUpdateComponent,
    GetMasterPreviewComponent,
    PopupTemporarySaveComponent,
    DrpTableComponent
  ]
})
export class CommonsModule { }
