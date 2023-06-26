import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerMctsCallConfiguration } from './mcts-callconfiguration.component';

describe('InnerMctsCallConfiguration', () => {
  let component: InnerMctsCallConfiguration;
  let fixture: ComponentFixture<InnerMctsCallConfiguration>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerMctsCallConfiguration ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerMctsCallConfiguration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
