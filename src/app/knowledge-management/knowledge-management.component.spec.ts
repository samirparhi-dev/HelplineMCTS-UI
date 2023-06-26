import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerKnowledgeManagementComponent } from './knowledge-management.component';

describe('InnerKnowledgeManagementComponent', () => {
  let component: InnerKnowledgeManagementComponent;
  let fixture: ComponentFixture<InnerKnowledgeManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerKnowledgeManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerKnowledgeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
