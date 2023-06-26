import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongenitalAnomaliesReportComponent } from './congenital-anomalies-report.component';

describe('CongenitalAnomaliesReportComponent', () => {
  let component: CongenitalAnomaliesReportComponent;
  let fixture: ComponentFixture<CongenitalAnomaliesReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongenitalAnomaliesReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongenitalAnomaliesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
