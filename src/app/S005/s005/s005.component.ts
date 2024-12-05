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
import { MatDialogRef } from '@angular/material/dialog';
import { PopupTemporarySaveComponent } from '../../commons/popup-temporary-save/popup-temporary-save.component';
import { MatDialog } from '@angular/material/dialog';

export interface Element {
  type_flg: string;
  agency_name: string;
  participating_store: string;
  held_date: string;
  event_location: string;
  order: string;
  number_people: string;
  item_name: string;
}

export interface Element2 {
  company_name: string;
  w1: string;
  w2: string;
  w3: string;
  w4: string;
  w5: string;
}

export interface Element3 {
  distributor_name: string;
  subject: string;
  amount: string;
}
const ELEMENT_DATA_2: Element2[] = [
  {
    company_name: '株式会社ABC',
    w1: '1000000',
    w2: '950000',
    w3: '未発行',
    w4: '未発行',
    w5: '未発行',
  } 
  , {
    company_name: '大宮店',
    w1: '1000000',
    w2: '950000',
    w3: '未発行',
    w4: '未発行',
    w5: '未発行',
  
  }
  , {
    company_name: '春日部店',
    w1: '1000000',
    w2: '950000',
    w3: '未発行',
    w4: '未発行',
    w5: '未発行',
  }
    , {
      company_name: '株式会社DEF',
      w1: '1000000',
      w2: '950000',
      w3: '未発行',
      w4: '未発行',
      w5: '未発行',
    }

]

const ELEMENT_DATA_3: Element3[] = [
  {
    distributor_name: '株式会社ABC',
    subject: '【株式会社ABC御中】御見積書_202410',
    amount: '150000',} 
  , {
    distributor_name: '株式会社DEF',
    subject: '【株式会社DEF御中】御見積書_202410',
    amount: '200000',}
    , {
      distributor_name: '株式会社DEF',
      subject: '【株式会社DEF御中】御見積書_202410',
      amount: '200000',}
      , {
        distributor_name: '株式会社DEF',
        subject: '【株式会社DEF御中】御見積書_202410',
        amount: '200000',}
]
const ELEMENT_DATA: Element[] = [
  {
    agency_name: 'ベルパック',
    participating_store: 'SB大宮',
    held_date: '10/1,2,3',
    event_location: '島忠北赤羽',
    order: 'クローザー',
    number_people: '1名',
    item_name: '',
    type_flg: '1'
  },
  {
    agency_name: '',
    participating_store: '',
    held_date: '10/1,2,3',
    event_location: '島忠北赤羽',
    order: 'ガール',
    number_people: '1名',
    item_name: '',
    type_flg: '1'
  },
  {
    agency_name: '',
    participating_store: '',
    held_date: '10/1,2,3',
    event_location: '島忠北赤羽',
    order: 'ガール',
    number_people: '1名',
    item_name: '',
    type_flg: '1'
  },
  {
    agency_name: '',
    participating_store: '',
    held_date: '10/1,2,3',
    event_location: '島忠北赤羽',
    order: '催事場',
    number_people: '10000',
    item_name: '',
    type_flg: '2'
  },
  {
    agency_name: '',
    participating_store: '',
    held_date: '10/1,2,3',
    event_location: '島忠北赤羽',
    order: '加算金',
    number_people: '210000',
    item_name: '交通費',
    type_flg: '3'
  },
  {
    agency_name: '（株）ABC',
    participating_store: '大宮店',
    held_date: '10/1,2,3',
    event_location: 'ドン・キホーテ大宮',
    order: 'クローザー',
    number_people: '210000',
    item_name: '',
    type_flg: '1'
  },
  {
    agency_name: '',
    participating_store: '',
    held_date: '10/1,2,3',
    event_location: 'ドン・キホーテ大宮',
    order: 'クローザー',
    number_people: '210000',
    item_name: '',
    type_flg: '1'
  },
  {
    agency_name: '',
    participating_store: '春日部店',
    held_date: '10/1,2,3',
    event_location: 'ドン・キホーテ大宮',
    order: 'ガール',
    number_people: '210000',
    item_name: '',
    type_flg: '1'
  },
];
@Component({
  selector: 'app-s005',
  standalone: true,
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    NgxExtendedPdfViewerModule],
  templateUrl: './s005.component.html',
  styleUrl: './s005.component.css'
})
export class S005Component implements OnInit {

  ngOnInit(): void {
  }

  constructor(public dialog: MatDialog,private router: Router
  ) {}
  dataSource3 = new MatTableDataSource<Element3>(ELEMENT_DATA_3);
  displayedColumns: string[] = [
    'select',
    'agency_name',
    'participating_store',
    'held_date',
    'event_location',
    'order',
    'number_people',
    'item_name',
    'split',
    'add',
    'del',
  ];
  displayedColumns2: string[] = [
    'company_name',
    'w1',
    'w2',
    'w3',
    'w4',
    'w5',
  ];
  displayedColumns3: string[] = [
    'distributor_name',
    'subject',
    'amount',
  ];
  pdfFilePath: string = 'assets/aa.pdf'; // 引用路径
  recipients_to = [{ type: '', name: '', email: '' }]; // 初始化一个输入框组
  recipients_cc = [{ type: '', name: '', email: '' }]; // 初始化一个输入框组

  addRecipient(flg: string) {
    if (flg == 'cc') {
      this.recipients_cc.push({ type: '', name: '', email: '' });

    } else {
      this.recipients_to.push({ type: '', name: '', email: '' });

    }

  }
  previewPageShow() {
  }
  goBack() {
    this.router.navigate(['/auto-x/s003/s003']);

    // this.location.back(); // 使用Location服务来导航到上一页

  }

  // 一時保存
  temporarySave(){
    const dialogRef = this.dialog.open(PopupTemporarySaveComponent, {
      width: '600px',  // 设置对话框的宽度
      height: '300px'  // 设置对话框的高度
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/auto-x/s001/s001']);
      }
    });
  }
}
