import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { EventService } from '../../services/events.service';
import { EventsData } from '../../Interfaces/eventsdata';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {
  events : EventsData[];

  constructor(public _router: Router,
    public _eventService: EventService) { }

  ngOnInit() {
    this.getEventsList();
  }

  getEventsList(){
    this._eventService.getAllEvents().subscribe(data => {
      this.events = data;
    },
    err => {
     console.log(err);    
    });
  }

  getEventInfoRoute(event : EventsData){
    return "/EventInfo/" + event.eventId
  }
  
}
