import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CommonsModule } from '../../commons/commons.module';

@Component({
  selector: 'app-s024',
  standalone: true,
  imports: [MaterialModule,ReactiveFormsModule,CommonModule,CommonsModule],
  templateUrl: './s024.component.html',
  styleUrl: './s024.component.css'
})
export class S024Component implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  files: File[] = [];
  fileTypes = ['あ', 'え', 'ｄ', 'ｑ'];
  dataSource = [
    { name: '', quantity: '' },
    { name: '', quantity: '' },
  ];
  displayedColumns: string[] = ['name', 'quantity'];
  uploadedFiles: File[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      fileName: ['', Validators.required],
      fileType: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]],
    });

    this.dataSource.forEach((_, index) => {
      this.formGroup.addControl(`name-${index}`, new FormControl('', Validators.required));
      this.formGroup.addControl(`quantity-${index}`, new FormControl('', [Validators.required, Validators.min(1)]));
    });
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      const formData = {
        ...this.formGroup.value,
        items: this.dataSource.map((_, index) => ({
          name: this.formGroup.get(`name-${index}`)?.value,
          quantity: this.formGroup.get(`quantity-${index}`)?.value,
        })),
      };
      console.log('formData:', formData);

      // API
    } else {
      console.log('失敗');
    }
  }

  goBack(){}

  onFilesDropped(files: File[]): void {
    this.uploadedFiles = files;
    console.log('Files received from child component:', this.uploadedFiles);
  }
}
