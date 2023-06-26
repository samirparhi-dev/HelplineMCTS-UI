import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutbondCallDocSelfNoComponent } from './outbound-call-screen.component';

describe('OutbondCallDocSelfNoComponent', () => {
  let component: OutbondCallDocSelfNoComponent;
  let fixture: ComponentFixture<OutbondCallDocSelfNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutbondCallDocSelfNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutbondCallDocSelfNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
