import { TestBed } from '@angular/core/testing';

import { FidelityService } from './fidelity.service';

describe('FidelityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FidelityService = TestBed.get(FidelityService);
    expect(service).toBeTruthy();
  });
});
