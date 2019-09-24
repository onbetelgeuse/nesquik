import { LoaderInterceptor } from './loader.interceptor';
import { LoaderService } from '../service/loader.service';
import { mock, instance } from 'ts-mockito';

describe('Loader', () => {
  let service: LoaderService;
  let interceptor: LoaderInterceptor;

  beforeEach(() => {
    service = mock(LoaderService);
    interceptor = new LoaderInterceptor(instance(service));
  });

  it('should create an instance', () => {
    expect(interceptor).toBeTruthy();
  });
});
