import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRouting } from './admin.routing'
import { MaterialModule } from '../material/material.module';
import { UsersComponent } from './components/users/users.component';
import { FormsModule } from '@angular/forms';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestiondetailsComponent } from './components/questiondetails/questiondetails.component';

@NgModule({
  declarations: [UsersComponent, QuestionsComponent, QuestiondetailsComponent],
  imports: [
    CommonModule,
    AdminRouting,
    FormsModule,
    MaterialModule
  ]
})
export class AdminModule { }
