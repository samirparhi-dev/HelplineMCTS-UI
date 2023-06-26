import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionaireComponent } from './add-questionaire.component';

describe('AddQuestionaireComponent', () => {
  let component: AddQuestionaireComponent;
  let fixture: ComponentFixture<AddQuestionaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuestionaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
