import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventinfoComponent } from './components/eventinfo/eventinfo.component';
import { MaterialModule } from '../material/material.module';
import { EventRouting } from './events.routing';
import { EventlistComponent } from './components/eventlist/eventlist.component';
import {FilterPipe} from '../core/filter.pipe';

@NgModule({
  declarations: [EventinfoComponent, EventlistComponent,FilterPipe],
  imports: [
    CommonModule,
    EventRouting,
    MaterialModule
  ]
})
export class EventsModule { }
