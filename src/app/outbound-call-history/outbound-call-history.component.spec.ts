import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutbondCallHistoryComponent } from './outbound-call-history.component';

describe('OutbondCallHistoryComponent', () => {
  let component: OutbondCallHistoryComponent;
  let fixture: ComponentFixture<OutbondCallHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutbondCallHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutbondCallHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
