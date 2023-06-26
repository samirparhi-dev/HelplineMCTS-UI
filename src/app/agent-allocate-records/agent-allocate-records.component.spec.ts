import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAllocateRecordsComponent } from './agent-allocate-records.component';

describe('AgentAllocateRecordsComponent', () => {
  let component: AgentAllocateRecordsComponent;
  let fixture: ComponentFixture<AgentAllocateRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentAllocateRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentAllocateRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
