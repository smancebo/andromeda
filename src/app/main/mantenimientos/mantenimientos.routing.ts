import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const mantenimientosRouting: Routes = [
  {path: 'usuarios', loadChildren: './usuarios/usuario.module#MantUsuariosModule'}
];

export const MantenimientosRoutes: ModuleWithProviders = RouterModule.forChild(mantenimientosRouting);
