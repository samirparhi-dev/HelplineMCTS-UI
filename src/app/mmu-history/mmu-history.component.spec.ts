import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmuHistoryComponent } from './mmu-history.component';

describe('MmuHistoryComponent', () => {
  let component: MmuHistoryComponent;
  let fixture: ComponentFixture<MmuHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmuHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmuHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
