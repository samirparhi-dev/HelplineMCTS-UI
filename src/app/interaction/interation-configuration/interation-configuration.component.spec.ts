import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterationConfigurationComponent } from './interation-configuration.component';

describe('InterationConfigurationComponent', () => {
  let component: InterationConfigurationComponent;
  let fixture: ComponentFixture<InterationConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterationConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterationConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
