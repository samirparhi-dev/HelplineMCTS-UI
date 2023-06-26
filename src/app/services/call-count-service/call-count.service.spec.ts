import { TestBed, inject } from '@angular/core/testing';

import { CallCountService } from './call-count.service';

describe('CallCountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CallCountService]
    });
  });

  it('should be created', inject([CallCountService], (service: CallCountService) => {
    expect(service).toBeTruthy();
  }));
});
