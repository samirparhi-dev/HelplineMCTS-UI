import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerQuestionTypeDetailComponent } from './question-type-detail.component';

describe('InnerQuestionTypeDetailComponent', () => {
  let component: InnerQuestionTypeDetailComponent;
  let fixture: ComponentFixture<InnerQuestionTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerQuestionTypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerQuestionTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
