import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { MainModule } from './main/main.module';
import { mainRouting } from './app.routing';
import {HttpModule} from '@angular/http';
import { JasperoAlertsModule } from '@jaspero/ng2-alerts';
import {VerifyLogin} from './shared/guards/verifyLogin';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    mainRouting,
    LoginModule,
    MainModule,
    HttpModule,
    BrowserAnimationsModule,
    JasperoAlertsModule
  ],
  providers: [VerifyLogin],
  bootstrap: [AppComponent]
})
export class AppModule { }
