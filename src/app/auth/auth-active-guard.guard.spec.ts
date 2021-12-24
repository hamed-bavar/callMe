import { TestBed } from '@angular/core/testing';

import { AuthActiveGuardGuard } from './auth-active-guard.guard';

describe('AuthActiveGuardGuard', () => {
  let guard: AuthActiveGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthActiveGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
