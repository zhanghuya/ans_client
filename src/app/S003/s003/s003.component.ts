import { Component, ElementRef, OnInit, ViewChild , QueryList, ViewChildren, AfterViewInit} from '@angular/core';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { Location } from '@angular/common';
import { MaterialModule } from '../../material.module';
import moment from 'moment';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer'
import { GetMasterDataComponent } from '../../commons/get-master-data/get-master-data.component';
import { GetMasterUpdateComponent } from '../../commons/get-master-update/get-master-update.component';
import { GetMasterPreviewComponent } from '../../commons/get-master-preview/get-master-preview.component';

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
  selector: 'app-s003',
  standalone: true,
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    NgxExtendedPdfViewerModule,
    GetMasterDataComponent,
    GetMasterUpdateComponent,
    GetMasterPreviewComponent,
],
  templateUrl: './s003.component.html',
  styleUrl: './s003.component.css',
})
export class S003Component implements OnInit {

  selectedYear!: moment.Moment;
  selectedYearShow!: string;
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
  page_1: boolean = true;
  page_2: boolean = false;
  page_3: boolean = false;
  recipients_to = [{ type: '', name: '', email: '' }]; // 初始化一个输入框组
  recipients_cc = [{ type: '', name: '', email: '' }]; // 初始化一个输入框组

  dataSource = new MatTableDataSource<Element>([]);
  dataSource2 = new MatTableDataSource<Element2>([])
  dataSource3 = new MatTableDataSource<Element3>(ELEMENT_DATA_3);
  selection = new SelectionModel<Element>(true, []);
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild('yearInput', { static: false }) yearInput!: ElementRef<HTMLInputElement>;
  @ViewChild(GetMasterDataComponent, { static: false }) page1!: GetMasterDataComponent;
  @ViewChild(GetMasterUpdateComponent, { static: false }) page2!: GetMasterUpdateComponent;
  @ViewChild(GetMasterPreviewComponent, { static: false }) page3!: GetMasterPreviewComponent;

  constructor(private location: Location) {
  }
  selectedYearFormat!: string;
  pdfFilePath: string = 'assets/aa.pdf'; // 引用路径
  mPageFlg: boolean = false; 
  chosenYearHandler(event: any, picker: any) {
    // const year = event.getFullYear();

    this.selectedYear = moment({ year: event.year(), month: 0, day: 1 });
    
    this.yearInput.nativeElement.value = event.year().toString();
    this.yearInput.nativeElement.outerText = event.year().toString();
    this.selectedYearFormat = this.selectedYear.toString();
    
    picker.close();
  }

  yearOnlyDisplay(date: Date): string { return date ? date.getFullYear().toString() : ''; }
  addRow(index: number) {
    const newRow: Element = {
      agency_name: '',
      participating_store: '',
      held_date: '',
      event_location: '',
      order: '',
      number_people: '',
      item_name: '',
      type_flg: ''
    };
    this.dataSource.data.splice(index + 1, 0, newRow);
    this.dataSource.data = [...this.dataSource.data]; // 触发视图更新
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  ngOnInit(): void {

    console.log('PageOneComponent initialized');
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  goBack() {
    // this.location.back(); // 使用Location服务来导航到上一页
    this.page_1 = true;
    this.page_2= false;
    this.page_3 = false;
  }
  // chosenYearHandler(normalizedYear: moment.Moment, datepicker: any) {
  //   this.selectedYear = moment({ year: normalizedYear.year(), month: 0, day: 1 });
  //   this.selectedYearFormat = normalizedYear.year().toString();
  //   datepicker.close();
  // }
  //   get selectedYearFormat() {
  //   return this.selectedYear ? this.selectedYear.format('YYYY') : '';
  // }


  delRow(index: number) {
    const data = this.dataSource.data;
    data.splice(index, 1); // 删除指定索引的元素
    this.dataSource.data = data; // 更新数据源
  }
  checkPageShow(flg: boolean) {
    this.page_1 = false;
    this.page_2= true;
    this.page_3 = false;
    this.mPageFlg = flg;
      // this.page2.setPageFlg(flg);


  }
  previewPageShow() {
    this.page_1 = false;
    this.page_2= false;
    this.page_3 = true;
  }
  addRecipient(flg: string) {
    if (flg == 'cc') {
      this.recipients_cc.push({ type: '', name: '', email: '' });

    } else {
      this.recipients_to.push({ type: '', name: '', email: '' });

    }

  }
// 在组件的 TypeScript 文件中
get dynamicClasses() {
  return {
    'rounded-card': this.page_1,
    'rounded-card-2': this.page_2,
    'rounded-card-3': this.page_3
  };
}
search(){
  this.dataSource2 = new MatTableDataSource<Element2>(ELEMENT_DATA_2);

}
getProjectInformation(){
  this.dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

}
}
