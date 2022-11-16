import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { EventService } from '../../services/events.service';
import { EventsData } from '../../Interfaces/eventsdata';
import { FeedbackData } from '../../Interfaces/feedbackdata';


@Component({
  selector: 'app-eventinfo',
  templateUrl: './eventinfo.component.html',
  styleUrls: ['./eventinfo.component.css']
})
export class EventinfoComponent implements OnInit {
  eventInfo : EventsData;
  feedbackInfo : FeedbackData[];
  eventId : string;
  successmsg : string;
  public participantFilter:any={};
  public nonParticipantFilter:any={};
  public unregisterFilter:any={};
  constructor(private _eventService: EventService,
    private route: ActivatedRoute) { }
    
  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get("eventId")
    console.log(this.eventId);
    this.getEventInfo(this.eventId);
    this.getFeedback(this.eventId);
    this.participantFilter.feedbackType=["PARTICIPATED"];
    this.nonParticipantFilter.feedbackType=["NOTATTENDED"];
    this.unregisterFilter.feedbackType=["UNREGISTERED"];
  }

  getEventInfo(eventid){
    this._eventService.getEventInfo(eventid).subscribe(data => {
     this.eventInfo = data;
     
    },
      err => {
        // if (err != null && err.status == 404) {
        //   //this._alert.create('error', 'Invalid username or password.', this.AlertOptions);
        // }
        // else
          //this._alert.create('error', 'Error has been occurred. Please try again.', this.AlertOptions);
      });
  }

  getFeedback(eventid){
    this._eventService.getEventFeedback(eventid).subscribe(data => {
     this.feedbackInfo = data;
     
    },
      err => {
        // if (err != null && err.status == 404) {
        //   //this._alert.create('error', 'Invalid username or password.', this.AlertOptions);
        // }
        // else
          //this._alert.create('error', 'Error has been occurred. Please try again.', this.AlertOptions);
      });
  }
  triggerFeedbackEmail(){
    console.log("Inside");
    this._eventService.TriggerFeedbackEmail(this.eventId).subscribe(data => {
      this.successmsg = "Feedback sent successfully";
    },
    err => {
      this.successmsg = "Unable to send the Feedback email";
     console.log(JSON.stringify(err));    
    });
  }
}
