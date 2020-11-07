import { TestBed } from '@angular/core/testing';

import { AuthSecretaireGuard } from './auth-secretaire.guard';

describe('AuthSecretaireGuard', () => {
  let guard: AuthSecretaireGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthSecretaireGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
