import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutbondCallWorklistComponent } from './outbound-worklist.component';

describe('OutbondCallWorklistComponent', () => {
  let component: OutbondCallWorklistComponent;
  let fixture: ComponentFixture<OutbondCallWorklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutbondCallWorklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutbondCallWorklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
