import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhmReportsComponent } from './nhm-reports.component';

describe('NhmReportsComponent', () => {
  let component: NhmReportsComponent;
  let fixture: ComponentFixture<NhmReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhmReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhmReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
