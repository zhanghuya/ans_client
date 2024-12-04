import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-s011',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, FlexLayoutModule],
  templateUrl: './s011.component.html',
  styleUrl: './s011.component.css'
})
export class S011Component {
  registrationForm: FormGroup;

  uploadedImageUrl: string | null = null;
  placeholderImageUrl: string = 'assets/placeholder.png';

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      companyName: ['', Validators.required],
      companyAddress: ['', Validators.required],
      bankName: ['', Validators.required],
      branchName: ['', Validators.required],
      branchCode: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('登録データ:', this.registrationForm.value);
      alert('登録が完了しました！');
    }
  }

  deleteImage(){

  }

  changeImage(){

  }
}
