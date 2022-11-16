import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventreportComponent } from  './components/eventreport/eventreport.component';
import {AuthGuard} from '../authentication/services/AuthGuard.service';

const reportsRoutes: Routes = [
    { path: 'EventReport', component: EventreportComponent, canActivate: [AuthGuard] }
];

export const ReportsRouting: ModuleWithProviders = RouterModule.forRoot(reportsRoutes);