import {RouterModule, Routes} from '@angular/router';

import {ModuleWithProviders} from '@angular/core';

import {LoginComponent} from './login.component';

const loginRoutes: Routes = [
  {path: 'login', component: LoginComponent}
];

export const LoginRouting: ModuleWithProviders = RouterModule.forRoot(loginRoutes);
