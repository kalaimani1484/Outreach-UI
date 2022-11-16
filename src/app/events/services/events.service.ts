import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { EventsData } from '../Interfaces/eventsdata';
import { FeedbackData } from '../Interfaces/feedbackdata';
@Injectable({
    providedIn: 'root'
  })
  export class EventService {
    constructor(private http: HttpClient) { }

    getEventInfo(eventid): Observable<EventsData> {
        return this.http.get<EventsData>(`${environment.EventApiUrl}/api/Events/info/`+eventid);
      }

    getEventFeedback(eventid): Observable<FeedbackData[]> {
        return this.http.get<FeedbackData[]>(`${environment.FeedbackApiUrl}/api/Feedback/details/`+eventid+'/ALL');
      }

    getAllEvents(): Observable<EventsData[]> {
        return this.http.get<EventsData[]>(`${environment.EventApiUrl}/api/Events/list`);
      }

    getEventforUSer(userid): Observable<EventsData[]> {
        return this.http.get<EventsData[]>(`${environment.EventApiUrl}/api/Events/list/`+userid);
      }
    
      TriggerFeedbackEmail(eventid: string): Observable<boolean> {
        return this.http.get<boolean>(`${environment.FeedbackApiUrl}/api/Feedback/emails/`+ eventid);
      }
    
  }