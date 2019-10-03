import { TestBed } from '@angular/core/testing';

import { FileService } from './file.service';
import { HttpClient } from '@angular/common/http';
import { mock, instance } from 'ts-mockito';

describe('FileService', () => {
  let service: FileService;
  let http: HttpClient;
  beforeEach(() => {
    http = mock(HttpClient);
    service = new FileService(instance(http));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
