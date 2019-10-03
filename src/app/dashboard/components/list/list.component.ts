import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UploadService } from '../../../shared/services/upload.service';
import { FileService } from '../../../shared/services/file.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public form: FormGroup;
  public files: File[];

  constructor(
    private readonly uploadService: UploadService,
    private readonly fileService: FileService,
  ) {}

  public ngOnInit() {
    this.fileService.findAll().subscribe(res => console.table(res));
  }

  public handleFileChange(files: File[]) {
    if (files && files.length > 0) {
      this.files = files;
    }
  }

  public uploadFiles(): void {
    this.uploadService.upload(new Set<File>(this.files)).subscribe();
  }
}
