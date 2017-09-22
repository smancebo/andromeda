
import {Translate} from "./translate.service";
import {TranslateHelper} from "./translate-helper";
import {TranslatePipe} from "./translate-pipe";

import {CommonModule } from "@angular/common";
import {NgModule} from "@angular/core";


@NgModule({
  imports:[CommonModule],
  declarations: [TranslatePipe],
  providers:[Translate, TranslateHelper],
  exports: [TranslatePipe]

})
export class TranslateModule{}
