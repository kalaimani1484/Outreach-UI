import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeRouting } from '../home/home.routing';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    HomeRouting,
    MaterialModule
  ]
})
export class HomeModule { }
