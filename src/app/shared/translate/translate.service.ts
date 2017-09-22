
import {Injectable} from "@angular/core";
import {TranslateHelper} from "./translate-helper"


@Injectable()
export class Translate
{
  constructor(public $translateHelter : TranslateHelper){}
  GetString(tagName : string) : string
  {
    return this.$translateHelter.GetString(tagName);
  }
}
