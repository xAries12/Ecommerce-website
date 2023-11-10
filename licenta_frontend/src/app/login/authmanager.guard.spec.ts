import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authmanagerGuard } from './authmanager.guard';

describe('authmanagerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authmanagerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
