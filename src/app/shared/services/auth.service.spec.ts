import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { mock, instance } from 'ts-mockito';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';

describe('AuthService', () => {
  let service: AuthService;
  let router: Router;
  let httpClient: HttpClient;
  let storageService: StorageService;
  beforeEach(() => {
    router = mock(Router);
    httpClient = mock(HttpClient);
    storageService = mock(StorageService);
    service = new AuthService(
      instance(router),
      instance(httpClient),
      instance(storageService),
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
