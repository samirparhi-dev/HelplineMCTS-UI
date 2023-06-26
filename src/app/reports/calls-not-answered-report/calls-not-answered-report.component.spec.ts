import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsNotAnsweredReportComponent } from './calls-not-answered-report.component';

describe('CallsNotAnsweredReportComponent', () => {
  let component: CallsNotAnsweredReportComponent;
  let fixture: ComponentFixture<CallsNotAnsweredReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallsNotAnsweredReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsNotAnsweredReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
