import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommuneService {
  constructor(private readonly http: HttpClient) {}

  public search(term: string): Observable<string[]> {
    return this.http
      .get<any[]>(
        `${environment.baseUrl}/${environment.api.communes}?q=${term}`,
      )
      .pipe(map(values => values.map(value => value.name)));
  }
}
