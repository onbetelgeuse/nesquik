import { AppErrorInterceptor } from './app-error.interceptor';

describe('AppError', () => {
  it('should create an instance', () => {
    expect(new AppErrorInterceptor()).toBeTruthy();
  });
});
