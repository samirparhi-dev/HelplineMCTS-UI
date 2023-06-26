import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInteractionComponent } from './create-interaction.component';

describe('CreateInteractionComponent', () => {
  let component: CreateInteractionComponent;
  let fixture: ComponentFixture<CreateInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
