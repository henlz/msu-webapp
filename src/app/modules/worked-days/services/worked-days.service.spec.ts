import { TestBed, inject } from '@angular/core/testing';

import { WorkedDaysService } from './worked-days.service';

describe('WorkedDaysService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkedDaysService]
    });
  });

  it('should ...', inject([WorkedDaysService], (service: WorkedDaysService) => {
    expect(service).toBeTruthy();
  }));
});
