import { TestBed } from '@angular/core/testing';

import { OpenweathermapapiService } from './openweathermapapi.service';

describe('OpenweathermapapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenweathermapapiService = TestBed.get(OpenweathermapapiService);
    expect(service).toBeTruthy();
  });
});
