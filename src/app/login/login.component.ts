import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginService } from './login.service';
import { AlertsService } from '@jaspero/ng2-alerts';
import { AppCredentials } from '../shared/models/app-credentials';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('btnLogin') btnLogin: ElementRef;
  constructor(public $login: LoginService, private _alert: AlertsService, private _router: Router) { }

  username: string;
  password: string;

  ngOnInit() {
  }

  async login() {
    this.btnLogin.nativeElement.disabled = true;
    const response = await (this.$login.login(this.username, this.password));
    const body = response.json();
    if (body.code === 'USR_SUCCESS') {
      const {username, token} = body;
      AppCredentials.Set({username, token});
      this._router.navigate(['/app']);
    } else {
      this._alert.create('error', body.msg);
      this.btnLogin.nativeElement.disabled = false;
    }
  }

}
