import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../material.module';
@Component({
  selector: 'app-s001',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './s001.component.html',
  styleUrl: './s001.component.css'
})
export class S001Component implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
    console.log('PageOneComponent initialized')
  }

}

const ELEMENT_DATA = [
  {id: 1, name: '氢', weight: 1.0079, symbol: 'H'},
  {id: 2, name: '氦', weight: 4.0026, symbol: 'He'},
  // 更多数据项
];

