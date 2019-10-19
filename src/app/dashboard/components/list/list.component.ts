import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UploadService } from '../../../shared/services/upload.service';
import { FileService } from '../../../shared/services/file.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from '../details/details.component';
import { FileDto } from 'src/app/shared/models/file.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public form: FormGroup;
  public files: File[];
  public fileList: any[];

  constructor(
    private readonly uploadService: UploadService,
    private readonly fileService: FileService,
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
}
