import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-drp-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './drp-table.component.html',
  styleUrls: ['./drp-table.component.css']
})
export class DrpTableComponent {
  displayedColumns: string[] = ['expand', 'name', 'position'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  expandedElement: any | null = null;
  selectedRow: any | null = null;

  toggleRow(element: any) {
    this.expandedElement = this.expandedElement === element ? null : element;
  }

  selectRow(element: any) {
    this.selectedRow = this.selectedRow === element ? null : element;
  }
}

const ELEMENT_DATA = [
  { position: 1, name: 'Hydrogen', detail: 'Lightest element' },
  { position: 2, name: 'Helium', detail: 'Second lightest element' },
  { position: 3, name: 'Lithium', detail: 'Used in batteries' },
];