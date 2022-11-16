import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule, NavigationExtras } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

import { AdminService } from '../../services/admin.service';
import { QuestionData, AnswerData } from '../../Interfaces/QuestionData';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  
  QuestionData : QuestionData;
  displayedColumns: string[] = ['question','feedbacktype','answers','actions'];
  QuestionsList: MatTableDataSource<QuestionData>;
  maxQustId : number =0;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(public _router: Router,
    public _adminervice: AdminService) { }

  ngOnInit() {
    this.getQuestionsList();
  }

  getQuestionsList(){
    this._adminervice.getAllQuestions().subscribe(data => {
      this.QuestionsList = new MatTableDataSource(data);
      this.QuestionsList.paginator = this.paginator;
      this.QuestionsList.sort = this.sort;
      if(data.length > 0){
        this.maxQustId = Math.max.apply(Math, data.map(function(o) { return o.questionid; }))
        console.log(this.maxQustId);
      }
    },
    err => {
     console.log(err);    
    });
  }
  GotoQuestionDetails(question){
    let navigationExtras: NavigationExtras = {
      queryParams:{"param" :  JSON.stringify(question)}
  };
    this._router.navigate(['/QuestionDetails'], navigationExtras);
  }
  AddnewQuestion(){
    let emptyQuestion = new QuestionData();
    emptyQuestion.questionid = this.maxQustId + 1;
    let navigationExtras: NavigationExtras = {
      queryParams:{"param" :  JSON.stringify(emptyQuestion)}
  };
    this._router.navigate(['/QuestionDetails'], navigationExtras);

  }
  DeleteQuestion(questionId){
    this._adminervice.DeleteQuestion(questionId).subscribe(data => {
      this.getQuestionsList();
    },
    err => {
     console.log(err);    
    });
  }
}
