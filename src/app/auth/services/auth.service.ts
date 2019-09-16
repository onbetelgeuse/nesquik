import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { StorageService } from './storage.service';
import { throwError, Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { APP_SETTINGS } from '../../app.settings';
import { AccessToken } from '../shared/access_token.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService,
  ) {}

  get isLogged(): boolean {
    return !!this.storageService.get('access_token');
  }

  login(values: any): Observable<boolean> {
    const body = {
      username: values.username,
      password: values.password,
    };

    return this.http
      .post<AccessToken>(`${APP_SETTINGS.baseUrl}/api/auth/login`, body)
      .pipe(
        tap(accessToken => {
          if (accessToken) {
            this.storageService.set(
              'access_token',
              accessToken,
              accessToken.expiresIn,
            );
          }
        }),
        map(res => !!res),
        catchError((err: HttpErrorResponse) => {
          return throwError(err);
        }),
      );
  }

  logout() {
    this.storageService.remove('access_token');
  }

  signup(values: any): Observable<any> {
    const body = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      username: values.username,
      password: values.password,
    };

    return this.http.post(
      `${APP_SETTINGS.baseUrl}/api/accounts/register`,
      body,
    );
  }

  getAccessToken(): AccessToken {
    return this.storageService.get<AccessToken>('access_token');
  }
}
