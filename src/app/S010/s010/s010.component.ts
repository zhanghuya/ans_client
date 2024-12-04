import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-s010',
  standalone: true,
  imports: [MaterialModule, CommonModule, FlexLayoutModule],
  templateUrl: './s010.component.html',
  styleUrl: './s010.component.css'
})
export class S010Component implements OnInit {

  columnsConfig = [
    { field: 'companyName', header: '会社名／店舗名', width: '20%' },
    { field: 'address', header: '住所', width: '40%' },
    { field: 'estimateHandler ', header: '見積担当者', width: '20%' },
    { field: 'invoiceHandler', header: '請求担当者', width: '20%' }
  ];
  dataSource = [
    { companyName: '株式会社ABC', address: '株式会社ABC', estimateHandler : '株式会社ABC', invoiceHandler: '株式会社ABC' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('PageOneComponent initialized')
  }

  navigateToEdit(): void {
    this.router.navigate(['/auto-x/s014/s014']);
  }

  get displayedColumns(): string[] {
    return this.columnsConfig.map(column => column.field);
  }

}
