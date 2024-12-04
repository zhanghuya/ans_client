import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import {
  FormsModule,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-s014',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, FlexLayoutModule, FormsModule],
  templateUrl: './s014.component.html',
  styleUrl: './s014.component.css'
})
export class S014Component {
  registrationForm: FormGroup;
  displayedColumns: string[] = ['storeName', 'estimateHandler', 'invoiceHandler', 'actions'];
  storeList = [
    { storeName: 'a', estimateHandler: 'a', invoiceHandler: 'a' },
    { storeName: 'a', estimateHandler: 'a', invoiceHandler: 'a' },
    { storeName: 'a', estimateHandler: 'a', invoiceHandler: 'a' },
    { storeName: 'a', estimateHandler: 'a', invoiceHandler: 'a' },
    { storeName: 'a', estimateHandler: 'a', invoiceHandler: 'a' },
    { storeName: 'a', estimateHandler: 'a', invoiceHandler: 'a' },
    { storeName: 'a', estimateHandler: 'a', invoiceHandler: 'a' },
    { storeName: 'a', estimateHandler: 'a', invoiceHandler: 'a' },
    { storeName: 'a', estimateHandler: 'a', invoiceHandler: 'a' },{ storeName: 'a', estimateHandler: 'a', invoiceHandler: 'a' },
    { storeName: 'a', estimateHandler: 'a', invoiceHandler: 'a' },
  ];

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      companyName: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  // 获取 stores 的 FormArray
  get storeArray(): FormArray {
    return this.registrationForm.get('stores') as FormArray;
  }

  // 添加新店铺
  addStore() {
    const storeGroup = this.fb.group({
      storeName: ['新店舗名'], // 默认值
      estimateHandler: ['見積担当者'], // 默认值
      invoiceHandler: ['請求担当者'] // 默认值
    });
    this.storeArray.push(storeGroup);
  }

  deleteStore(index: number) {
    this.storeArray.removeAt(index);
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('登録データ:', this.registrationForm.value);
      alert('登録が完了しました！');
    }
  }

  goBack(){
    
  }
}
