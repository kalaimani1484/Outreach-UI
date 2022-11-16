import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { FeedbackData } from '../interfaces/feedbackdata';
import { QuestionData } from '../../admin/Interfaces/QuestionData'

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  SaveFeedback(feedback: FeedbackData): Observable<FeedbackData> {
    return this.http.post<FeedbackData>(`${environment.FeedbackApiUrl}/api/Feedback/Response`, feedback);
  }

  getQuestions(feedbackType: string): Observable<QuestionData[]> {
    return this.http.get<QuestionData[]>(`${environment.FeedbackApiUrl}/api/Feedback/questions/`+feedbackType);
  }


}
