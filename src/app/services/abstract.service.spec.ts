import { TestBed, inject } from '@angular/core/testing';

import { AbstractService } from './abstract.service';
import { Employee } from '../modules/employee/models/employee.model';

describe('AbstractService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbstractService]
    });
  });

  it('should ...', inject([AbstractService], (service: AbstractService<Employee>) => {
    expect(service).toBeTruthy();
  }));
});
