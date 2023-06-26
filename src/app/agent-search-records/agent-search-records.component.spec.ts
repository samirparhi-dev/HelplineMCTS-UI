import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSearchRecordsComponent } from './agent-search-records.component';

describe('AgentSearchRecordsComponent', () => {
  let component: AgentSearchRecordsComponent;
  let fixture: ComponentFixture<AgentSearchRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentSearchRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentSearchRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
