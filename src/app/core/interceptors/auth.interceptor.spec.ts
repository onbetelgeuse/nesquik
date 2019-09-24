import { AuthHttpInterceptor } from './auth.interceptor';

describe('Auth', () => {
  it('should create an instance', () => {
    expect(new AuthHttpInterceptor()).toBeTruthy();
  });
});
