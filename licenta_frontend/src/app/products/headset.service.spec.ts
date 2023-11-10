import { TestBed } from '@angular/core/testing';

import { HeadsetService } from './headset.service';

describe('HeadsetService', () => {
  let service: HeadsetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadsetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
