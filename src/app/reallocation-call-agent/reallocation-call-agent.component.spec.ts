import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReallocationCallAgentComponent } from './reallocation-call-agent.component';

describe('ReallocationCallAgentComponent', () => {
  let component: ReallocationCallAgentComponent;
  let fixture: ComponentFixture<ReallocationCallAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReallocationCallAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReallocationCallAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
