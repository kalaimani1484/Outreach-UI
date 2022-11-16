import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JasperoAlertsModule } from '@jaspero/ng-alerts';
import { HomeModule } from '../home/home.module'
import { AuthGuard } from '../authentication/services/AuthGuard.service';
import { Routes, RouterModule } from '@angular/router';
import { EventsModule } from '../events/events.module';
import { ReportsModule } from '../reports/reports.module';
import { AdminModule } from '../admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FeedbackModule } from '../feedback/feedback.module';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AuthenticationModule,
    HttpClientModule,
    HomeModule,
    RouterModule,
    EventsModule,
    ReportsModule,
    AdminModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FeedbackModule,
    JasperoAlertsModule.forRoot()
  ],
  exports:[NavbarComponent],
  providers:[AuthGuard]
})
export class CoreModule { }
