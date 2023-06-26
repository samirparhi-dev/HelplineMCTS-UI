import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallStatisticsComponent } from './call-statistics.component';

describe('CallStatisticsComponent', () => {
  let component: CallStatisticsComponent;
  let fixture: ComponentFixture<CallStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
