import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { UploadService } from '../../../shared/services/upload.service';
import { FileService } from '../../../shared/services/file.service';
import { mock, instance } from 'ts-mockito';
import { CommuneService } from '../../../shared/services/commune.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

describe('ListComponent', () => {
  let component: ListComponent;
  let uploadService: UploadService;
  let fileService: FileService;
  let communeService: CommuneService;
  let modalService: NgbModal;

  beforeEach(() => {
    uploadService = mock(UploadService);
    fileService = mock(FileService);
    communeService = mock(CommuneService);
    modalService = mock(NgbModal);

    component = new ListComponent(
      instance(uploadService),
      instance(fileService),
      instance(communeService),
      instance(modalService),
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
