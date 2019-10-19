import { Injectable } from '@angular/core';
import { FileDto } from './../models/file.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  public files: FileDto[] = [];
  constructor(private readonly http: HttpClient) {}
  public findAll(): Observable<FileDto[]> {
    return this.http
      .get<FileDto[]>(`${environment.baseUrl}/${environment.api.files}`)
      .pipe(tap((files: FileDto[]) => (this.files = files || [])));
  }
}
