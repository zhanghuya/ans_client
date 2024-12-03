import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatListModule, MatIconModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit  {
  @Output() flagChanged = new EventEmitter<boolean>();

  showFlg = true;
  ngOnInit(): void {
   
  }

  toggleSidenav() {
    this.showFlg = false
    this.flagChanged.emit(this.showFlg);

  }
}
