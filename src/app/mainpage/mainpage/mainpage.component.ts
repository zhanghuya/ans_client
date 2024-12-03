import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ContentComponent } from '../content/content.component';
import { Router, NavigationEnd, RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { filter } from 'rxjs';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer'
import { CommonModule } from '@angular/common';

import { Const } from '../../const/const';


@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, MatIconModule, RouterModule, SidebarComponent, MaterialModule, NgxExtendedPdfViewerModule, CommonModule],

  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent implements OnInit {
  headerTitle: string = 'ホーム';
  isSidenavOpen: boolean = true;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      let url = this.router.url.split('?')[0].split('#')[0]; // 移除查询参数和片段
      const segments = url.split('/'); // 按照斜杠分割URL
      const lastSegment = segments.pop() || ''; // 获取最后一个部分，处理可能的 undefined
      this.headerTitle = Const.TITLE[lastSegment] || 'ホーム';
    });  }

  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild('sidebar') sidebar!: SidebarComponent;
  toggleSidenav(isSidenavOpen: any) {
      this.isSidenavOpen = isSidenavOpen
      this.sidenav.toggle();
    

  }
}
