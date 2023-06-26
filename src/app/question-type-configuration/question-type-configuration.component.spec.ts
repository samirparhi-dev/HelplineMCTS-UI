import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerQuestionTypeConfigurationComponent } from './question-type-configuration.component';

describe('InnerQuestionTypeConfigurationComponent', () => {
  let component: InnerQuestionTypeConfigurationComponent;
  let fixture: ComponentFixture<InnerQuestionTypeConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerQuestionTypeConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerQuestionTypeConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
