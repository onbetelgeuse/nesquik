import { AppError } from './app-error.interceptor';

describe('AppError', () => {
  it('should create an instance', () => {
    expect(new AppError()).toBeTruthy();
  });
});
