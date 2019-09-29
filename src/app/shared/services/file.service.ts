import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { File } from './../models/file.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private readonly http: HttpClient) {}
  public findAll(): Observable<File> {
    return this.http.get<File>(
      `${environment.baseUrl}/${environment.api.files}`,
    );
  }
}
