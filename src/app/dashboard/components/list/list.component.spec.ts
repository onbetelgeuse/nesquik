import { ListComponent } from './list.component';
import { UploadService } from '../../../shared/services/upload.service';
import { FileService } from '../../../shared/services/file.service';
import { mock, instance, verify, anyString, when, capture } from 'ts-mockito';
import { CommuneService } from '../../../shared/services/commune.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, of } from 'rxjs';
import { tick, fakeAsync } from '@angular/core/testing';

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

  it('should search', fakeAsync(() => {
    // prepare
    const text$: Subject<string> = new Subject<string>();
    when(communeService.search(anyString())).thenReturn(of([]));
    // execute
    const sub = component.search(text$).subscribe();

    text$.next('m');
    tick(50);
    text$.next('mu');
    tick(500);
    // verify
    verify(communeService.search(anyString())).once();
    const [capturedTerm]: string[] = capture<string>(
      communeService.search,
    ).first();
    expect(capturedTerm).toBe('MU');

    sub.unsubscribe();
  }));
});
