import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterinfoComponent } from './registerinfo/registerinfo.component';
import { LoginallComponent } from './loginall/loginall.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'registerinfo', component: RegisterinfoComponent },
  { path: 'loginall', component: LoginallComponent } // 确保添加此路由
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
