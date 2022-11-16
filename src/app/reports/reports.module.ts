import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventreportComponent } from './components/eventreport/eventreport.component';
import { ReportsRouting } from './reports.routing';
import { MaterialModule } from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [EventreportComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ReportsRouting
  ]
})
export class ReportsModule { }
