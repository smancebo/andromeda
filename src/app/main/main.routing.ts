import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {VerifyLogin} from '../shared/guards/verifyLogin';

import { MainComponent } from './main.component';

const mainRouting: Routes = [
  {path: 'app', component: MainComponent, canActivate: [VerifyLogin]},
  {path: '**', redirectTo: '/app'}
];

export const MainRouting: ModuleWithProviders = RouterModule.forRoot(mainRouting);
