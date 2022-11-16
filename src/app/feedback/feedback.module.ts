import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackresponseComponent } from './components/feedbackresponse/feedbackresponse.component';
import { MaterialModule } from '../material/material.module';
import { FeedbackRouting } from './feedback.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FeedbackresponseComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FeedbackRouting,
    FormsModule
  ]
})
export class FeedbackModule { }
