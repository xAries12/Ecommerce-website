import { TestBed } from '@angular/core/testing';

import { SingupserviceService } from './singupservice.service';

describe('SingupserviceService', () => {
  let service: SingupserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingupserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
