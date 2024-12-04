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
  selector: 'app-s013',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, FlexLayoutModule],
  templateUrl: './s013.component.html',
  styleUrl: './s013.component.css'
})
export class S013Component {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
    });
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
