import { AppHttpInterceptor } from './app.interceptor';

describe('App', () => {
  it('should create an instance', () => {
    expect(new AppHttpInterceptor()).toBeTruthy();
  });
});
