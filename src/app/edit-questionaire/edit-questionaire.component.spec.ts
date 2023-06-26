import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuestionaireComponent } from './edit-questionaire.component';

describe('EditQuestionaireComponent', () => {
  let component: EditQuestionaireComponent;
  let fixture: ComponentFixture<EditQuestionaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditQuestionaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuestionaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
