import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UploadService } from '../../../shared/services/upload.service';
import { FileService } from '../../../shared/services/file.service';
import { NgbModal, NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from '../details/details.component';
import { FileDto } from 'src/app/shared/models/file.model';
import { Observable, of } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  tap,
  switchMap,
  catchError,
} from 'rxjs/operators';
import { CommuneService } from '../../../shared/services/commune.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public form: FormGroup;
  public files: File[];
  public fileList: any[];

  public searching = false;
  public searchFailed = false;

  constructor(
    private readonly uploadService: UploadService,
    private readonly fileService: FileService,
    private readonly communeService: CommuneService,
    private modalService: NgbModal,
  ) {}

  public ngOnInit() {
    this.fileService.findAll().subscribe(res => (this.fileList = res));
  }

  public handleFileChange(files: File[]) {
    if (files && files.length > 0) {
      this.files = files;
    }
  }

  public uploadFiles(): void {
    this.uploadService.upload(new Set<File>(this.files)).subscribe();
  }

  public open(file: FileDto): void {
    const modalRef = this.modalService.open(DetailsComponent);
    (modalRef.componentInstance as DetailsComponent).file = file;
  }

  public search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => (this.searching = true)),
      switchMap(term =>
        term.length < 2
          ? []
          : this.communeService.search(term.toUpperCase()).pipe(
              tap(() => (this.searchFailed = false)),
              catchError(() => {
                this.searchFailed = true;
                return of([]);
              }),
            ),
      ),
      tap(() => (this.searching = false)),
      // tslint:disable-next-line: semicolon
    );
}
