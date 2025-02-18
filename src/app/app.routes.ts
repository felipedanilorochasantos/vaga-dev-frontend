import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
    { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)}
];
