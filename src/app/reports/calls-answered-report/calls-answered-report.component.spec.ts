import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsAnsweredReportComponent } from './calls-answered-report.component';

describe('CallsAnsweredReportComponent', () => {
  let component: CallsAnsweredReportComponent;
  let fixture: ComponentFixture<CallsAnsweredReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallsAnsweredReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsAnsweredReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
