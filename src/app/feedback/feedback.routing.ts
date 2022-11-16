import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import {AuthGuard} from '../authentication/services/AuthGuard.service';
import { FeedbackresponseComponent } from '../feedback/components/feedbackresponse/feedbackresponse.component';


const feedbackRoutes: Routes = [
      { path: 'feedback', component: FeedbackresponseComponent }
];

export const FeedbackRouting: ModuleWithProviders = RouterModule.forRoot(feedbackRoutes);