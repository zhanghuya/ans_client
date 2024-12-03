import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginallComponent } from './loginall/loginall.component';

import { RegisterComponent } from './register/register.component';
import { RegisterinfoComponent } from './registerinfo/registerinfo.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LoginComponent,
    RegisterComponent,
    RegisterinfoComponent,
    LoginallComponent
  ]
})
export class AuthModule { }
