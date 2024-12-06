import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-s024',
  standalone: true,
  imports: [MaterialModule,ReactiveFormsModule,CommonModule],
  templateUrl: './s024.component.html',
  styleUrl: './s024.component.css'
})
export class S024Component implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  fileTypes = ['あ', 'え', 'ｄ', 'ｑ'];
  dataSource = [
    { name: '', quantity: '' },
    { name: '', quantity: '' },
  ];
  displayedColumns: string[] = ['name', 'quantity'];

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

  onFileUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log('Uploaded file:', file);
    }
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



  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      console.log(files[0]);
    }
  }

  onSelectFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt,.pdf,.docx,.jpg,.png';
    input.click();

    input.onchange = (event: Event) => {
      const inputElement = event.target as HTMLInputElement;
      if (inputElement?.files) {
        const file = inputElement.files[0];
        console.log(file);
      }
    };
  }
}
