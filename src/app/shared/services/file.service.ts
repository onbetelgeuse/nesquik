import { Injectable } from '@angular/core';
import { File } from './../models/file.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private readonly http: HttpClient) {}
  public findAll(): Observable<File[]> {
    return this.http.get<File[]>(
      `${environment.baseUrl}/${environment.api.files}`,
    );
  }
}
