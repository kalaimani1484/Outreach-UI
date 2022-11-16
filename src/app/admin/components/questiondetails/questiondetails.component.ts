import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

import { AdminService } from '../../services/admin.service';
import { QuestionData, AnswerData } from '../../Interfaces/QuestionData';
@Component({
  selector: 'app-questiondetails',
  templateUrl: './questiondetails.component.html',
  styleUrls: ['./questiondetails.component.css']
})
export class QuestiondetailsComponent implements OnInit {
  Question : QuestionData;

  constructor(public _router: ActivatedRoute,
    public _route: Router,
    public _adminervice: AdminService) { }

  ngOnInit() {
    this._router.queryParams.subscribe(params => {
    this.Question = JSON.parse(params["param"]);
  });
  }

  addEmptyAns(Question : QuestionData){
    let newanswer = new AnswerData();
    newanswer.answer = "";
      if(Question.answers == null && Question.answers == undefined){
        newanswer.id = 1;
        Question.answers = [newanswer];
      }else{
        let lastelement:AnswerData = Question.answers[Question.answers.length -1] ;
        newanswer.id = lastelement.id + 1;
        Question.answers.push(newanswer);
      }
    
  }

  RemoveAns(Question : QuestionData, answerId : number){
    Question.answers = this.Question.answers.filter(item => item.id != answerId);
  }

  CancelAction(){
    this._route.navigate(['Questions']);
  }
  SaveQuestion(Question : QuestionData){
    console.log(Question.id);
    if(Question.answers == null){
      Question.answers = [];
    }
    if(Question.id != undefined){
      
      this._adminervice.UpdateQuestion(Question).subscribe(data => {
        this._route.navigate(['Questions']);
      },
      err => {
       console.log(err);    
      });
    }else{

      Question.active = 1;
      this._adminervice.SaveNewQuestions(Question).subscribe(data => {
        this._route.navigate(['Questions']);
      },
      err => {
       console.log(err);    
      });
    }
  }
  DeleteQuestion(Question : QuestionData){
    if(Question.id != ""){
      this._adminervice.DeleteQuestion(Question.id).subscribe(data => {
        this._route.navigate(['Questions']);
      },
      err => {
       console.log(err);    
      });
    }
    this._route.navigate(['Questions']);
  }
}
