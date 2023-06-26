import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateBenificiaryIDComponent } from './generate-benificiary-id.component';

describe('GenerateBenificiaryIDComponent', () => {
  let component: GenerateBenificiaryIDComponent;
  let fixture: ComponentFixture<GenerateBenificiaryIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateBenificiaryIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateBenificiaryIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
