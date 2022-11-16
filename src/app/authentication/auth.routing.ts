import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/AuthGuard.service';
import { AuthenticationModule } from './authentication.module';

const authRoutes: Routes = [
    { path: 'Login', component: LoginComponent }
];

export const AuthRouting: ModuleWithProviders = RouterModule.forRoot(authRoutes);