import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MctsAgentOutbondcallComponent } from './innerpage-agent.component';

describe('MctsAgentOutbondcallComponent', () => {
  let component: MctsAgentOutbondcallComponent;
  let fixture: ComponentFixture<MctsAgentOutbondcallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MctsAgentOutbondcallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MctsAgentOutbondcallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
