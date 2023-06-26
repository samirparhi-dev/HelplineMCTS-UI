import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialPreferenceComponent } from './dial-preference.component';

describe('DialPreferenceComponent', () => {
  let component: DialPreferenceComponent;
  let fixture: ComponentFixture<DialPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialPreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
