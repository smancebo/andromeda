import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {CommonModule} from "@angular/common";
import {LoginRouting} from "./login.routing";
import {HttpClient} from "../shared/http-client";
import { LoginService } from "./login.service";
import {FormsModule} from "@angular/forms";

@NgModule(
  {
    imports:[CommonModule, LoginRouting, FormsModule],
    declarations:[LoginComponent],
    providers:[HttpClient, LoginService]
  }
)
export class LoginModule{}
