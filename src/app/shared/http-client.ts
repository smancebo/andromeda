import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Config } from '../config/config';
import { Usuario } from './models/usuario';
import { AppCredentials } from './models/app-credentials';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpClient {

  usuario: Usuario = new Usuario();
  constructor(private http: Http) {}
  private getToken(): string {
    const credentials = AppCredentials.Get();
    return credentials.token;
  }
  private createHeaders(): Headers {
    const headers = new Headers();
    headers.append('x-access-token', this.getToken());

    return headers;
  }
  get(url) {
      return this.http.get(`${Config.API}${url}`, {headers: this.createHeaders()}).toPromise();
  }
  post(url, data) {
    return this.http.post(`${Config.API}${url}`, data, {headers: this.createHeaders()}).toPromise();
  }
  put(url, data) {
    return this.http.put(`${Config.API}${url}`, data, {headers: this.createHeaders()}).toPromise();
  }
  delete(url) {
    return this.http.delete(`${Config.API}${url}`, {headers: this.createHeaders()}).toPromise();
  }
  verifyToken() {
    return this.http.post(`${Config.API}/auth/verify`, AppCredentials.Get()).toPromise();
  }
}
