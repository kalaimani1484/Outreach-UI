import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventinfoComponent } from '../events/components/eventinfo/eventinfo.component';
import { EventlistComponent } from '../events/components/eventlist/eventlist.component';
import {AuthGuard} from '../authentication/services/AuthGuard.service';

const eventRoutes: Routes = [
    { path: 'EventInfo/:eventId', component: EventinfoComponent, canActivate: [AuthGuard] },
    { path: 'EventList', component: EventlistComponent, canActivate: [AuthGuard] }
];

export const EventRouting: ModuleWithProviders = RouterModule.forRoot(eventRoutes);