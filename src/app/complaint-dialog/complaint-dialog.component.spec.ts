import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintDialogComponent } from './complaint-dialog.component';

describe('ComplaintDialogComponent', () => {
  let component: ComplaintDialogComponent;
  let fixture: ComponentFixture<ComplaintDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
