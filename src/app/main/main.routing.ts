import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {VerifyLogin} from '../shared/guards/verifyLogin';
import { mainChilds } from './main.childs';

import { MainComponent } from './main.component';

const mainRouting: Routes = [
  {path: 'app', component: MainComponent, canActivate: [VerifyLogin], children: mainChilds},
  {path: '**', redirectTo: '/app'}
];

export const MainRouting: ModuleWithProviders = RouterModule.forChild(mainRouting);
