import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MantUsuarioComponent } from './usuario.component';

const usuariosRouting: Routes = [
  { path: '', component: MantUsuarioComponent}
];

export const MantUsuariosRoutes: ModuleWithProviders = RouterModule.forChild(usuariosRouting);
