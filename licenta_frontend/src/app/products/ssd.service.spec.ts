import { TestBed } from '@angular/core/testing';

import { SsdService } from './ssd.service';

describe('SsdService', () => {
  let service: SsdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
