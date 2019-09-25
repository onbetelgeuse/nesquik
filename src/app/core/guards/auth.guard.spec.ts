import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AuthService } from 'src/app/shared/services/auth.service';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { mock, instance, when, verify, anything, deepEqual } from 'ts-mockito';

describe('AuthGuard', () => {
  let authService: AuthService;
  let router: Router;
  let guard: AuthGuard;
  const next: ActivatedRouteSnapshot = mock(ActivatedRouteSnapshot);
  const state: RouterStateSnapshot = mock(RouterStateSnapshot);

  beforeEach(() => {
    authService = mock(AuthService);
    router = mock(Router);
    guard = new AuthGuard(instance(authService), instance(router));
  });

  describe('A) Nominal case', () => {
    it('1) should ...', () => {
      // verify
      expect(guard).toBeTruthy();
    });

    it('2) CanActivate should be called ... when isLogged returns true', () => {
      // prepare
      when(authService.isLogged).thenReturn(true);
      when(next.queryParams).thenReturn({ returnUrl: '' });
      // execute
      const result = guard.canActivate(instance(next), instance(state));
      // verify
      expect(result).toBeTruthy();
      verify(router.navigate(anything())).never();
    });

    it('3) CanActivate should be called ... when isLogged returns false', () => {
      // prepare
      when(authService.isLogged).thenReturn(false);
      when(next.queryParams).thenReturn({ returnUrl: '' });
      when(router.navigate(anything(), anything())).thenResolve(true);
      // execute
      const result = guard.canActivate(instance(next), instance(state));
      // verify
      expect(result).toBeFalsy();
      verify(router.navigate(anything(), anything())).once();
    });
  });
});
