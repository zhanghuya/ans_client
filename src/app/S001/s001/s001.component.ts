import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-s001',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './s001.component.html',
  styleUrl: './s001.component.css'
})
export class S001Component implements OnInit {
  constructor(private router: Router) {}

  displayedColumns: string[] = ['company', 'estimate', 'invoice'];
  dataSource = [
    { company: '株式会社ABC', estimate: 1000000, invoice: 950000 },
    { company: '大宮店', estimate: 500000, invoice: 500000 },
    { company: '春日部店', estimate: 500000, invoice: 500000 },
    { company: '株式会社DEF', estimate: 1200000, invoice: null },
  ];

  ngOnInit(): void {
    console.log('PageOneComponent initialized')
  }

  // 見積処理の見積処理へ
  processEstimates() {
    console.log('見積処理を実行しました');
  }

  // 見積処理の一時保存
  saveTemp() {
    console.log('一時保存が完了しました');
  }

  processInvoices() {
    console.log('請求処理を実行しました');
  }

  search(){

  }

  onRowDoubleClick() {
    console.log('双击事件触发，数据为：@@@@@@@@@@');
    this.router.navigate(['/auto-x/s019/s019']);
  }

}

