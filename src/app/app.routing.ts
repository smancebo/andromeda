import {RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const mainRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
];

export const mainRouting: ModuleWithProviders = RouterModule.forRoot(mainRoutes);
