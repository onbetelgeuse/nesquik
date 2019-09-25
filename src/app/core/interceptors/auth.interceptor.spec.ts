import { AuthHttpInterceptor } from './auth.interceptor';
import { AuthService } from 'src/app/shared/services/auth.service';
import { mock, instance } from 'ts-mockito';

describe('Auth', () => {
  let interceptor: AuthHttpInterceptor;
  let authService: AuthService;
  beforeEach(() => {
    authService = mock(AuthService);
    interceptor = new AuthHttpInterceptor(instance(authService));
  });
  it('should create an instance', () => {
    expect(interceptor).toBeTruthy();
  });
});
