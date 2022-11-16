import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

import { FeedbackService } from '../../services/feedback.service';
import { FeedbackData, ResponseData } from '../../interfaces/feedbackdata';
import { CoreModule } from '@angular/flex-layout';
import { QuestionData } from 'src/app/admin/Interfaces/QuestionData';


@Component({
  selector: 'app-feedbackresponse',
  templateUrl: './feedbackresponse.component.html',
  styleUrls: ['./feedbackresponse.component.css']
})
export class FeedbackresponseComponent implements OnInit {
  eventId : string;
  feedbackType : string;
  questions : QuestionData[];
  showsuccess: boolean;

  constructor(public _actrouter: ActivatedRoute,
    public _router: Router,
    public _feedbackservice: FeedbackService) { }
    feedbackResponse = new FeedbackData();

  ngOnInit() {
    this._actrouter.queryParams.subscribe(params => {
      this.eventId = params["eventid"];
      this.feedbackType = params["feedbacktype"];
    });
    this.GetQuestions();
    this.showsuccess = false;
  }

  GetQuestions(){
      this._feedbackservice.getQuestions(this.feedbackType).subscribe(data => {
        this.questions = data;
      },
      err => {
       console.log(err);    
      });
  }
  foo(questionId, ans){
    if(this.feedbackResponse.Responses == null || this.feedbackResponse.Responses == undefined){
      this.feedbackResponse.Responses = [];
      let resp = new ResponseData();
      resp.QuestionId = questionId;
      resp.answers = [];
      resp.answers.push(ans);
      this.feedbackResponse.Responses[0] = resp;
    }
    else{
      let resp = this.feedbackResponse.Responses.filter(item => item.QuestionId === questionId)[0];
      if(resp != null && resp != undefined){
        resp.answers.push(ans);
        this.feedbackResponse.Responses.map((todo, i) => {
          if (todo.QuestionId == questionId){
            this.feedbackResponse.Responses[i] = resp;
           }
         });
      }
      else{
        let resp = new ResponseData();
        resp.QuestionId = questionId;
        resp.answers = [];
        resp.answers.push(ans);
        this.feedbackResponse.Responses.push(resp);
      }
    }
    console.log(JSON.stringify(this.feedbackResponse));
  }

  UpateFreeTextAns(event: any,questionId){
    console.log(questionId); 
    console.log(event.target.value);
    let ans = event.target.value;
    if(this.feedbackResponse.Responses == null || this.feedbackResponse.Responses == undefined){
      this.feedbackResponse.Responses = [];
      let resp = new ResponseData();
      resp.QuestionId = questionId;
      resp.answers = [];
      resp.answers.push(ans);
      this.feedbackResponse.Responses[0] = resp;
    }
    else{
      let resp = this.feedbackResponse.Responses.filter(item => item.QuestionId === questionId)[0];
      if(resp != null && resp != undefined){
        resp.answers[0] = ans;
        this.feedbackResponse.Responses.map((todo, i) => {
          if (todo.QuestionId == questionId){
            this.feedbackResponse.Responses[i] = resp;
           }
         });
      }
      else{
        let resp = new ResponseData();
        resp.QuestionId = questionId;
        resp.answers = [];
        resp.answers.push(ans);
        this.feedbackResponse.Responses.push(resp);
      }
    }
    console.log(JSON.stringify(this.feedbackResponse));
  }

  SubmitFeedback(){
    this.feedbackResponse.EventId = this.eventId;
    this.feedbackResponse.FeedbackType = this.feedbackType;
    this._feedbackservice.SaveFeedback(this.feedbackResponse).subscribe(data => {
      this.showsuccess = true;
    },
    err => {
      this.showsuccess = true;
     console.log(err);    
    });
  }
  ResetFeedback(){
    this.GetQuestions();
  }
}
