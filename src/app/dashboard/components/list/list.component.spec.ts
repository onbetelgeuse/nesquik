import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { UploadService } from '../../../shared/services/upload.service';
import { FileService } from '../../../shared/services/file.service';
import { mock, instance } from 'ts-mockito';

describe('ListComponent', () => {
  let component: ListComponent;
  let uploadService: UploadService;
  let fileService: FileService;

  beforeEach(() => {
    uploadService = mock(UploadService);
    fileService = mock(FileService);

    component = new ListComponent(
      instance(uploadService),
      instance(fileService),
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
