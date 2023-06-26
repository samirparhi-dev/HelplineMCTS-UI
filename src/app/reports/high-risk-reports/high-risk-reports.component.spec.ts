import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighRiskReportsComponent } from './high-risk-reports.component';

describe('HighRiskReportsComponent', () => {
  let component: HighRiskReportsComponent;
  let fixture: ComponentFixture<HighRiskReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighRiskReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighRiskReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
