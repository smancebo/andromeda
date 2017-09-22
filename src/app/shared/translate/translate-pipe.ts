import {Pipe, PipeTransform} from "@angular/core";
import {TranslateHelper} from "./translate-helper";



@Pipe({name: 'translate'})
export class TranslatePipe implements PipeTransform
{
  constructor(public $translateHelper: TranslateHelper){}
  transform(value: string) : string
  {
    return this.$translateHelper.GetString(value).then((tag)=> {
      return tag;
    });
  } 
}
