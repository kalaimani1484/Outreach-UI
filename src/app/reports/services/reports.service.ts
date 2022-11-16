import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ReportData, eventData } from '../Interfaces/reportdata';

@Injectable({
    providedIn: 'root'
  })
  export class ReportService {
    constructor(private http: HttpClient) { }

    getAllEvents(): Observable<eventData[]> {
        return this.http.get<eventData[]>(`${environment.EventApiUrl}/api/Events/list`);
      }
    
    SendReports(report: ReportData): Observable<ReportData> {
        return this.http.post<ReportData>(`${environment.EventApiUrl}/api/Events/report`, report);
      }

    
  }