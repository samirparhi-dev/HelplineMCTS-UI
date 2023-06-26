import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallDetailsReportComponent } from './call-details-report.component';

describe('CallDetailsReportComponent', () => {
  let component: CallDetailsReportComponent;
  let fixture: ComponentFixture<CallDetailsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallDetailsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallDetailsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
