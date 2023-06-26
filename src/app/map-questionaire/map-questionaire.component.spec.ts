import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapQuestionaireComponent } from './map-questionaire.component';

describe('MapQuestionaireComponent', () => {
  let component: MapQuestionaireComponent;
  let fixture: ComponentFixture<MapQuestionaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapQuestionaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapQuestionaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
