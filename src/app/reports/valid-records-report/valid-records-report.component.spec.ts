import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidRecordsReportComponent } from './valid-records-report.component';

describe('ValidRecordsReportComponent', () => {
  let component: ValidRecordsReportComponent;
  let fixture: ComponentFixture<ValidRecordsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidRecordsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidRecordsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
