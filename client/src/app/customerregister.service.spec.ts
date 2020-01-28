import { TestBed } from '@angular/core/testing';

import { CustomerregisterService } from './customerregister.service';

describe('CustomerregisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerregisterService = TestBed.get(CustomerregisterService);
    expect(service).toBeTruthy();
  });
});
