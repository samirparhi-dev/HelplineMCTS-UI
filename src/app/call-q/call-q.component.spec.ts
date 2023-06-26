import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallQComponent } from './call-q.component';

describe('CallQComponent', () => {
  let component: CallQComponent;
  let fixture: ComponentFixture<CallQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
