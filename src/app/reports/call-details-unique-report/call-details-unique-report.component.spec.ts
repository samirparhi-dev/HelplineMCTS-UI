import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallDetailsUniqueReportComponent } from './call-details-unique-report.component';

describe('CallDetailsUniqueReportComponent', () => {
  let component: CallDetailsUniqueReportComponent;
  let fixture: ComponentFixture<CallDetailsUniqueReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallDetailsUniqueReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallDetailsUniqueReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
