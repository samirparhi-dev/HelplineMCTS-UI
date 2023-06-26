import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMctsCallConfigurationComponent } from './new-mcts-call-configuration.component';

describe('NewMctsCallConfigurationComponent', () => {
  let component: NewMctsCallConfigurationComponent;
  let fixture: ComponentFixture<NewMctsCallConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMctsCallConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMctsCallConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
