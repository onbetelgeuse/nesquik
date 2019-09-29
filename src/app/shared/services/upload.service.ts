import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import {
  HttpRequest,
  HttpEventType,
  HttpResponse,
  HttpClient,
  HttpEvent,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { last, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  public progress: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private readonly http: HttpClient) {}

  public upload(files: Set<File>): Observable<any> {
    const formData: FormData = new FormData();

    files.forEach((file: File) => {
      formData.append('file', file, file.name);
    });

    const req = new HttpRequest(
      'POST',
      `${environment.baseUrl}/${environment.api.upload}`,
      formData,
      {
        reportProgress: true,
        responseType: 'arraybuffer',
      },
    );

    return this.http
      .request(req)
      .pipe(map(event => this.getStatusMessage(event)));
  }

  private getStatusMessage(event: HttpEvent<any>): void {
    if (event.type === HttpEventType.UploadProgress) {
      const percentDone = Math.round((100 * event.loaded) / event.total);
      this.progress.next(percentDone);
    } else if (event instanceof HttpResponse) {
      this.progress.complete();
    }
  }
}
