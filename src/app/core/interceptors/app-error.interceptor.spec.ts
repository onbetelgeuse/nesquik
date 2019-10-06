import { AppErrorInterceptor } from './app-error.interceptor';
import { AuthService } from '../../shared/services/auth.service';
import { mock, instance } from 'ts-mockito';

describe('AppError', () => {
  let interceptor: AppErrorInterceptor;
  let authService: AuthService;
  beforeEach(() => {
    authService = mock(AuthService);
    interceptor = new AppErrorInterceptor(instance(authService));
  });
  it('should create an instance', () => {
    expect(interceptor).toBeTruthy();
  });
});
