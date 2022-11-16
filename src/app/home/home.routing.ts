import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../home/dashboard/dashboard.component';
import {AuthGuard} from '../authentication/services/AuthGuard.service';

const homeRoutes: Routes = [
    { path: 'Dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];

export const HomeRouting: ModuleWithProviders = RouterModule.forRoot(homeRoutes);