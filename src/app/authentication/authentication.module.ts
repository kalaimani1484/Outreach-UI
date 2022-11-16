import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
//import { AuthInterceptor, AuthHttpInterceptor } from './services/authinterceptor';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JasperoAlertsModule } from '@jaspero/ng-alerts';
import { AuthRouting } from './auth.routing';
import {LoginService} from './services/login.service';
import { MaterialModule } from '../material/material.module';
import { HomeModule } from '../home/home.module';
import { BasicAuthInterceptor } from './services/auth.interceptor'
import { LaddaModule } from 'angular2-ladda';

@NgModule({
  declarations: [LoginComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    LoginService],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    AuthRouting,
    JasperoAlertsModule,
    MaterialModule,
    HomeModule,
    LaddaModule
  ],
})
export class AuthenticationModule { }
