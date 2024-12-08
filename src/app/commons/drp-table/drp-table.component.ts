import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ChangeDetectorRef } from '@angular/core';
import { CdkColumnDef } from '@angular/cdk/table';
export interface ChildElement {
  detail: string;
  additionalInfo: string;
}

export interface ParentElement {
  id: number;
  name: string;
  expanded: boolean;
  children: ChildElement[];
}

const ELEMENT_DATA: ParentElement[] = [
  {
    id: 1,
    name: 'Parent 1',
    expanded: false,
    children: [
      { detail: 'Detail 1', additionalInfo: 'Additional Info 1' },
      { detail: 'Detail 2', additionalInfo: 'Additional Info 2' }
    ]
  },
  {
    id: 2,
    name: 'Parent 2',
    expanded: false,
    children: [
      { detail: 'Detail A', additionalInfo: 'Additional Info A' },
      { detail: 'Detail B', additionalInfo: 'Additional Info B' }
    ]
  }
];


@Component({
  selector: 'app-drp-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    CdkColumnDef,
    MatPaginatorModule
  ],
  templateUrl: './drp-table.component.html',
  styleUrls: ['./drp-table.component.css']
})
export class DrpTableComponent {
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns: string[] = ['expand', 'id', 'name'];

  constructor(private cdr: ChangeDetectorRef) {}

  toggleRow(element: ParentElement) {
    element.expanded = !element.expanded;
    this.cdr.detectChanges(); // 强制刷新模板
  }
}
