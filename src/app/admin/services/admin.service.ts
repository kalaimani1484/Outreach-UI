import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { UserData } from '../Interfaces/UserData';
import { QuestionData } from '../Interfaces/QuestionData';

@Injectable({
    providedIn: 'root'
  })
  export class AdminService {
    constructor(private http: HttpClient) { }
    //Users Service
    getAllUsers(): Observable<UserData[]> {
        return this.http.get<UserData[]>(`${environment.AdminApiUrl}/api/PMO/user/list`);
      }

    SaveNewUser(newUser): Observable<UserData> {
        return this.http.post<UserData>(`${environment.AdminApiUrl}/api/PMO/user/new`,newUser);
      }
    
    UpdateUser(editUser): Observable<UserData> {
        return this.http.put<UserData>(`${environment.AdminApiUrl}/api/PMO/user`,editUser);
      }

    DeleteUser(userId): Observable<UserData> {
        return this.http.delete<UserData>(`${environment.AdminApiUrl}/api/PMO/user/`+ userId );
      }

    GetUserData(userId): Observable<UserData> {
        return this.http.get<UserData>(`${environment.AdminApiUrl}/api/PMO/user/`+ userId );
      }

    //Questions service
    getAllQuestions(): Observable<QuestionData[]> {
      return this.http.get<QuestionData[]>(`${environment.AdminApiUrl}/api/Questions/list`);
    }

    SaveNewQuestions(newQuestion): Observable<QuestionData> {
      return this.http.post<QuestionData>(`${environment.AdminApiUrl}/api/Questions/new`,newQuestion);
    }
  
    UpdateQuestion(editQuestion): Observable<QuestionData> {
      return this.http.put<QuestionData>(`${environment.AdminApiUrl}/api/Questions/updateQues`,editQuestion);
    }

    DeleteQuestion(QuestionId): Observable<QuestionData> {
      return this.http.delete<QuestionData>(`${environment.AdminApiUrl}/api/Questions/`+ QuestionId );
    }

    GetQuestionData(QuestionId): Observable<QuestionData> {
      return this.http.get<QuestionData>(`${environment.AdminApiUrl}/api/Questions/`+ QuestionId );
    }
   
  }