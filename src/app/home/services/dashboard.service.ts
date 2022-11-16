import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

import { dashboardDetails } from '../Interfaces/dashboardDetails';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class DashboardService {

    constructor(private http: HttpClient, public _router: Router) { }

    DashboardData(): Observable<dashboardDetails> {
        return this.http.get<dashboardDetails>(`${environment.EventApiUrl}/api/Events/summary`);
      }

  }