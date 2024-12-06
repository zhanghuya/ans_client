
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { Location } from '@angular/common';
import { MaterialModule } from '../../material.module';
import moment from 'moment';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer'
import { Router } from '@angular/router';
import { WinService } from '../../service/win.service';


@Component({
  selector: 'app-s004',
  standalone: true,

  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    NgxExtendedPdfViewerModule],
    templateUrl: './s004.component.html',
  styleUrl: './s004.component.css'
})
export class S004Component implements OnInit {
  recipients_cc = [{ type: '', name: '', email: '' }]; // 初始化一个输入框组
  ngOnInit(): void {
  }
  addRecipient(flg: string) {
      this.recipients_cc.push({ type: '', name: '', email: '' });


  }

}
