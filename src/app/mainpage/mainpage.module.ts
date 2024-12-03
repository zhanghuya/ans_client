import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';
import { ContentComponent } from './content/content.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { routes } from '../../app/app.routes'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainpageRoutingModule,
    ContentComponent,
    MainpageComponent,
    SidebarComponent,
  ]
})
export class MainpageModule { }
