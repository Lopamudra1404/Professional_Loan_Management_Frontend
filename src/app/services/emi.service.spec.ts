import { TestBed } from '@angular/core/testing';

import { EMIService } from './emi.service';

describe('EMIService', () => {
  let service: EMIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EMIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
