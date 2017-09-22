import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '../http-client';


@Injectable()
export class VerifyLogin implements CanActivate {
  constructor(private _http: HttpClient, private _router: Router) {}
  async canActivate() {
    const response = await this._http.verifyToken();
    const { valid } = response.json();
    if (valid) {
      return true;
    }
    this._router.navigate(['/login']);
  }
}
