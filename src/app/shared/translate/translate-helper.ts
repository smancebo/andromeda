import {Injectable} from "@angular/core";

var __defaultLang: string = 'es';
var __langPath: string = 'assets/lang';


@Injectable()
export class TranslateHelper {
  promise: Promise<any>;
  resolve: (value?: any) => void;
  reject: (reason?: any) => void;


  constructor() {

    this.promise = new Promise<any>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    })
    //this.LoadLanguage();
  }

  LoadLanguage(lang?): Promise<any> {

    if (lang === null) {
      if (sessionStorage.getItem('safeLangConfig') !== null) {
        lang = sessionStorage.getItem('safeLangConfig');
      }
      else {
        lang = __defaultLang;
      }
    }
    var request = new XMLHttpRequest();
    request.open('GET', `${__langPath}/${lang}/lang.json`);
    request.onload = () => {
      try {
        var langConfig = JSON.parse(request.responseText);
        sessionStorage.setItem('safeLang', JSON.stringify(langConfig));
        sessionStorage.setItem('safeLangConfig', lang);

        this.resolve(langConfig);
      }
      catch (e) {
        this.reject(e);
      }
    }

    request.send();
    return this.promise;
  }

  LoadAvailableLanguages(): Promise<any> {

    var request = new XMLHttpRequest();
    request.open('GET', `${__langPath}/languages.json`);
    request.onload = () => {
      try {
        var languages = JSON.parse(request.responseText);
        this.resolve(languages);
      }
      catch (e) {
        this.reject(e);
      }
    }

    return this.promise;
  }

  GetString(tagName: string): any {

    var strResolve : (value : string) => void;
    var strReject : (value : any) => void;

    var promise = new Promise<string>((resolve, reject)=>{
      strResolve = resolve;
      strReject = reject;
    });

    this.LoadLanguage(sessionStorage.getItem('safeLangConfig')).then((l) => {
      strResolve(l[tagName] || "TAG NOT FOUND");
    },
    (reason) => {
      strReject("TAG NOT FOUND");
    });

    return promise;


    // var lang = JSON.parse(sessionStorage.getItem('safeLang'));
    // if (lang === null) {
    //
    // } else {
    //   return lang[tagName] || "TAG NOT FOUND";
     }



}
