import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../authentication/services/AuthGuard.service';

import {UsersComponent } from './components/users/users.component';
import {QuestionsComponent } from './components/questions/questions.component';
import {QuestiondetailsComponent } from './components/questiondetails/questiondetails.component';

const adminRoutes: Routes = [
    { path: 'Users', component: UsersComponent, canActivate: [AuthGuard] },
    { path: 'Questions', component: QuestionsComponent, canActivate: [AuthGuard] },
    { path: 'QuestionDetails', component: QuestiondetailsComponent, canActivate: [AuthGuard] }
];

export const AdminRouting: ModuleWithProviders = RouterModule.forRoot(adminRoutes);