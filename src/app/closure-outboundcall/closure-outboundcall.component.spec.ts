import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerClosureOutbondcallComponent } from './closure-outboundcall.component';

describe('InnerClosureOutbondcallComponent', () => {
  let component: InnerClosureOutbondcallComponent;
  let fixture: ComponentFixture<InnerClosureOutbondcallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerClosureOutbondcallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerClosureOutbondcallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
