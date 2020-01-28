import { TestBed } from '@angular/core/testing';

import { DecodeTokenService } from './decode-token.service';

describe('DecodeTokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DecodeTokenService = TestBed.get(DecodeTokenService);
    expect(service).toBeTruthy();
  });
});
