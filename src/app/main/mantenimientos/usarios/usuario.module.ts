import {NgModule} from "@angular/core";
import {MantUsuarioComponent} from "./usuario.component";
import { HttpClient } from "../../../shared/http-client" ;

@NgModule({
  declarations:[MantUsuarioComponent],
  providers:[ HttpClient ]
})
export class MantUsuariosModule {}
