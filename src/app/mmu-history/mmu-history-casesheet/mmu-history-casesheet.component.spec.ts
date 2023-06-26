import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmuHistoryCasesheetComponent } from './mmu-history-casesheet.component';

describe('MmuHistoryCasesheetComponent', () => {
  let component: MmuHistoryCasesheetComponent;
  let fixture: ComponentFixture<MmuHistoryCasesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmuHistoryCasesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmuHistoryCasesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
