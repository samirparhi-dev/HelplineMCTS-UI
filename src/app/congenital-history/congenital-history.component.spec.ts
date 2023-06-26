import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongenitalHistoryComponent } from './congenital-history.component';

describe('CongenitalHistoryComponent', () => {
  let component: CongenitalHistoryComponent;
  let fixture: ComponentFixture<CongenitalHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongenitalHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongenitalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
