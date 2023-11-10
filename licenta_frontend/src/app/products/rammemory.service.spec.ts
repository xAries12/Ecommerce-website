import { TestBed } from '@angular/core/testing';

import { RammemoryService } from './rammemory.service';

describe('RammemoryService', () => {
  let service: RammemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RammemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
