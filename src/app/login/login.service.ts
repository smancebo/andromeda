import { Injectable } from '@angular/core';
import { HttpClient } from '../shared/http-client';

@Injectable()
export class LoginService {
  constructor(private $http: HttpClient) { }

  login(username: string, password: string) {
    return this.$http.post('/login', { username, password });
  }
}
