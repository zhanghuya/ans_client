import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-s012',
  standalone: true,
  imports: [MaterialModule, CommonModule, FlexLayoutModule],
  templateUrl: './s012.component.html',
  styleUrl: './s012.component.css'
})
export class S012Component implements OnInit {

  columnsConfig = [
    { field: 'lastName', header: '姓', width: '10%' },
    { field: 'firstName', header: '名', width: '10%' },
    { field: 'email', header: 'メールアドレス', width: '30%' },
    { field: 'password', header: 'パスワード', width: '30%' },
    { field: 'role', header: '権限', width: '10%' }
  ];
  dataSource = [
    { lastName: '株式会社ABC', firstName: '株式会社ABC', email: '株式会社ABC', password: '株式会社ABC', showPassword: false, role: '株式会社ABC' },
    { lastName: '株式会社ABC', firstName: '株式会社ABC', email: '株式会社ABC', password: '株式会社ABC', showPassword: false, role: '株式会社ABC' },
    { lastName: '株式会社ABC', firstName: '株式会社ABC', email: '株式会社ABC', password: '株式会社ABC', showPassword: false, role: '株式会社ABC' },
    { lastName: '株式会社ABC', firstName: '株式会社ABC', email: '株式会社ABC', password: '株式会社ABC', showPassword: false, role: '株式会社ABC' },
    { lastName: '株式会社ABC', firstName: '株式会社ABC', email: '株式会社ABC', password: '株式会社ABC', showPassword: false, role: '株式会社ABC' },
    { lastName: '株式会社ABC', firstName: '株式会社ABC', email: '株式会社ABC', password: '株式会社ABC', showPassword: false, role: '株式会社ABC' },
    { lastName: '株式会社ABC', firstName: '株式会社ABC', email: '株式会社ABC', password: '株式会社ABC', showPassword: false, role: '株式会社ABC' },
    { lastName: '株式会社ABC', firstName: '株式会社ABC', email: '株式会社ABC', password: '株式会社ABC', showPassword: false, role: '株式会社ABC' },
    { lastName: '株式会社ABC', firstName: '株式会社ABC', email: '株式会社ABC', password: '株式会社ABC', showPassword: false, role: '株式会社ABC' },
    { lastName: '株式会社ABC', firstName: '株式会社ABC', email: '株式会社ABC', password: '株式会社ABC', showPassword: false, role: '株式会社ABC' },
    { lastName: '株式会社ABC', firstName: '株式会社ABC', email: '株式会社ABC', password: '株式会社ABC', showPassword: false, role: '株式会社ABC' },
    { lastName: '株式会社ABC', firstName: '株式会社ABC', email: '株式会社ABC', password: '株式会社ABC', showPassword: false, role: '株式会社ABC' },
    { lastName: '株式会社ABC', firstName: '株式会社ABC', email: '株式会社ABC', password: '株式会社ABC', showPassword: false, role: '株式会社ABC' },
    { lastName: '株式会社ABC', firstName: '株式会社ABC', email: '株式会社ABC', password: '株式会社ABC', showPassword: false, role: '株式会社ABC' },
    { lastName: '株式会社ABC', firstName: '株式会社ABC', email: '株式会社ABC', password: '株式会社ABC', showPassword: false, role: '株式会社ABC' },
    { lastName: '株式会社ABC', firstName: '株式会社ABC', email: '株式会社ABC', password: '株式会社ABC', showPassword: false, role: '株式会社ABC' },
    { lastName: '株式会社ABC', firstName: '株式会社ABC', email: '株式会社ABC', password: '株式会社ABC', showPassword: false, role: '株式会社ABC' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('PageOneComponent initialized')
  }

  togglePasswordVisibility(row: any): void {
    row.showPassword = !row.showPassword;
  }

  navigateToEdit(): void {
    this.router.navigate(['/auto-x/s013/s013']);
  }

  get displayedColumns(): string[] {
    return this.columnsConfig.map(column => column.field);
  }

}
