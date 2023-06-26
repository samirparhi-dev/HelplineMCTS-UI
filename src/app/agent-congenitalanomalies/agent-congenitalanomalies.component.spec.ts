import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerpageAgentCongenitalAnomalies } from './agent-congenitalanomalies.component';

describe('InnerpageAgentCongenitalAnomalies', () => {
  let component: InnerpageAgentCongenitalAnomalies;
  let fixture: ComponentFixture<InnerpageAgentCongenitalAnomalies>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerpageAgentCongenitalAnomalies ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerpageAgentCongenitalAnomalies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
