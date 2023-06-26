import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCallConfigComponent } from './edit-call-config.component';

describe('EditCallConfigComponent', () => {
  let component: EditCallConfigComponent;
  let fixture: ComponentFixture<EditCallConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCallConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCallConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
