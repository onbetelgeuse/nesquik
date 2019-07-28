import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_SETTINGS } from 'src/app/app.settings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getValues(): Observable<string[]> {
    return this.http.get<string[]>(`${APP_SETTINGS.baseUrl}/api/values`);
  }
}
