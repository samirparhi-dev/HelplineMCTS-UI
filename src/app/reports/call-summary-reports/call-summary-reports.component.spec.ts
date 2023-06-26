import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallSummaryReportsComponent } from './call-summary-reports.component';

describe('CallSummaryReportsComponent', () => {
  let component: CallSummaryReportsComponent;
  let fixture: ComponentFixture<CallSummaryReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallSummaryReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallSummaryReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
