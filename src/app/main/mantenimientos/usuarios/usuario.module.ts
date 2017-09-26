import {NgModule} from '@angular/core';
import {MantUsuarioComponent} from './usuario.component';
import { HttpClient } from '../../../shared/http-client' ;
import { MantUsuariosRoutes } from './usuarios.routing';

@NgModule({
  declarations: [MantUsuarioComponent],
  providers: [ HttpClient ],
  imports: [MantUsuariosRoutes]
})
export class MantUsuariosModule {}
