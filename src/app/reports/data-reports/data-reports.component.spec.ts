import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataReportsComponent } from './data-reports.component';

describe('DataReportsComponent', () => {
  let component: DataReportsComponent;
  let fixture: ComponentFixture<DataReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
