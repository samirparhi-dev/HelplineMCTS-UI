import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintReportsComponent } from './complaint-reports.component';

describe('ComplaintReportsComponent', () => {
  let component: ComplaintReportsComponent;
  let fixture: ComponentFixture<ComplaintReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
