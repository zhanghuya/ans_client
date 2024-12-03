import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage/mainpage.component';
import { AuthGuard } from './auth/auth.guard';
export const routes: Routes = [
    { path: '', redirectTo: 'auth/loginall', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    {
        path: 'auto-x',
        component: MainpageComponent,
        canActivate: [AuthGuard], // 保护主页面
        children: [
            { path: '', redirectTo: 's001/s001', pathMatch: 'full' }, // 设置默认路由为 's001'
    { path: 's001', loadChildren: () => import('./S001/s001.module').then(m => m.S001Module) },

    { path: 's002', loadChildren: () => import('./S002/s002.module').then(m => m.S002Module) },
    { path: 's003', loadChildren: () => import('./S003/s003.module').then(m => m.S003Module) },
    { path: 's004', loadChildren: () => import('./S004/s004.module').then(m => m.S004Module) },
    { path: 's005', loadChildren: () => import('./S005/s005.module').then(m => m.S005Module) },
    { path: 's006', loadChildren: () => import('./S006/s006.module').then(m => m.S006Module) },
    { path: 's007', loadChildren: () => import('./S007/s007.module').then(m => m.S007Module) },
    { path: 's009', loadChildren: () => import('./S009/s009.module').then(m => m.S009Module) },
    { path: 's008', loadChildren: () => import('./S008/s008.module').then(m => m.S008Module) },
    { path: 's010', loadChildren: () => import('./S010/s010.module').then(m => m.S010Module) },
    { path: 's011', loadChildren: () => import('./S011/s011.module').then(m => m.S011Module) },
    { path: 's012', loadChildren: () => import('./S012/s012.module').then(m => m.S012Module) },
    { path: 'commons', loadChildren: () => import('./commons/commons.module').then(m => m.CommonsModule) },
]}
];
