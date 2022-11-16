import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackresponseComponent } from './feedbackresponse.component';

describe('FeedbackresponseComponent', () => {
  let component: FeedbackresponseComponent;
  let fixture: ComponentFixture<FeedbackresponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackresponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
