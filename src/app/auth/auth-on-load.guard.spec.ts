import { TestBed } from '@angular/core/testing';

import { AuthOnLoadGuard } from './auth-on-load.guard';

describe('AuthOnLoadGuard', () => {
  let guard: AuthOnLoadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthOnLoadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
