import { UploadService } from './upload.service';
import { HttpClient } from '@angular/common/http';
import { mock, instance } from 'ts-mockito';

describe('UploadService', () => {
  let service: UploadService;
  let http: HttpClient;
  beforeEach(() => {
    http = mock(HttpClient);
    service = new UploadService(instance(http));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
