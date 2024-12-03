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
  selector: 'app-s006',
  standalone: true,
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    NgxExtendedPdfViewerModule],
  templateUrl: './s006.component.html',
  styleUrl: './s006.component.css'
})
export class S006Component {
  @Output() flagChanged = new EventEmitter<boolean>();
  mPageFlg: boolean = false; 
  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  dataSource2 = new MatTableDataSource<Element2>([])
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
  search(){
    this.dataSource2 = new MatTableDataSource<Element2>(ELEMENT_DATA_2);
  }

  checkPageShow(pageFlg:boolean) {
    // this.mPageFlg = pageFlg;
    // this.flagChanged.emit(pageFlg);
    this.router.navigate(['/auto-x/s022/s022'], { queryParams: { pageFlg: pageFlg } });


  }
  
  // checkPageShowM(pageFlg?:string) {
  //   this.mPageFlg = false;
  //   this.flagChanged.emit(pageFlg);

  // }
}


