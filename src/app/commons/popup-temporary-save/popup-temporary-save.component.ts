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

@Component({
  selector: 'app-popup-temporary-save',
  standalone: true,
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    NgxExtendedPdfViewerModule],
  templateUrl: './popup-temporary-save.component.html',
  styleUrl: './popup-temporary-save.component.css'
})
export class PopupTemporarySaveComponent  implements OnInit {
  ngOnInit(): void {
  }

  constructor(public dialogRef: MatDialogRef<PopupTemporarySaveComponent>) {}

  closeDialog(): void {
    this.dialogRef.close(true);
  }
}
