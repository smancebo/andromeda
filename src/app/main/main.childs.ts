import { MantenimientoModule } from './mantenimientos/mantenimiento.module';

export const mainChilds = [
  // {path: 'operaciones', loadChildren: ''},
  // {path: 'procesos', loadChildren: ''},
  {path: 'mantenimientos', loadChildren: () => MantenimientoModule},
  // {path: 'configuracion', loadChildren: ''},
  // {path: 'reportes', loadChildren: ''},
];
