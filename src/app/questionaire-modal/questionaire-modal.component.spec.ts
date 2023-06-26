import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerQuestionerModalComponent } from './questionaire-modal.component';

describe('InnerQuestionerModalComponent', () => {
  let component: InnerQuestionerModalComponent;
  let fixture: ComponentFixture<InnerQuestionerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerQuestionerModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerQuestionerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
