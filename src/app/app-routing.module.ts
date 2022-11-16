import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/authentication/components/login/login.component'
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './authentication/services/AuthGuard.service'
const routes: Routes = [{
  path: '',
  component: LoginComponent,
},
{
  path: '**', component: LoginComponent
}];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);