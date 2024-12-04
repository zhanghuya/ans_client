import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-s019',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './s019.component.html',
  styleUrl: './s019.component.css'
})
export class S019Component implements OnInit {
  displayedColumns: string[] = ['company', 'estimate', 'invoice'];
  dataSource1 = [
    { company: '1株式会社ABC', estimate: 1000000, invoice: 950000 },
    { company: '1大宮店', estimate: 500000, invoice: 500000 },
    { company: '1春日部店', estimate: 500000, invoice: 500000 },
    { company: '1株式会社DEF', estimate: 1200000, invoice: null },
  ];

  dataSource2 = [
    { company: '2株式会社ABC', estimate: 1000000, invoice: 950000 },
    { company: '2大宮店', estimate: 500000, invoice: 500000 },
    { company: '2春日部店', estimate: 500000, invoice: 500000 },
    { company: '2株式会社DEF', estimate: 1200000, invoice: null },
  ];

  currentDataSource: any[] = this.dataSource1;

  ngOnInit(): void {
    console.log('PageOneComponent initialized')
  }

  onTabChange(event: any) {
    if (event.index === 0) {
      this.currentDataSource = this.dataSource1;
    } else if (event.index === 1) {
      this.currentDataSource = this.dataSource2;
    }
  }
}
