import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidRecordsReportComponent } from './invalid-records-report.component';

describe('InvalidRecordsReportComponent', () => {
  let component: InvalidRecordsReportComponent;
  let fixture: ComponentFixture<InvalidRecordsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidRecordsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidRecordsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
