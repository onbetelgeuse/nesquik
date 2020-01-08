import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { StorageService } from './storage.service';
import { LoginUser } from '../models/login-user.model';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { AccessToken } from '../models/access-token.model';
import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { SignupUser } from '../models/signup-user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  constructor(
    private readonly router: Router,
    private readonly http: HttpClient,
    private readonly storageService: StorageService,
  ) {}

  public get isLogged(): boolean {
    return this.storageService.get('access_token') != null;
  }

  public getAccessToken(): AccessToken {
    return this.storageService.get<AccessToken>('access_token');
  }

  public getCurrentUser(): Observable<User> {
    if (this.isLogged) {
      return this.http
        .get<User>(environment.api.auth.me)
        .pipe(tap((user: User) => this.user$.next(user)));
    }
    this.user$.next(null);
  }

  public login(user: LoginUser): Observable<boolean> {
    const body = {
      username: user.username,
      password: user.password,
    };

    return this.http.post<AccessToken>(environment.api.auth.login, body).pipe(
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

  public logout() {
    this.storageService.remove('access_token');
    this.user$.next(null);
    if (this.router.url && !this.router.url.match('/auth/login')) {
      this.router.navigate(['']);
    }
  }

  public signup(values: SignupUser): Observable<any> {
    const body = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      username: values.username,
      password: values.password,
    };

    return this.http.post(environment.api.auth.register, body);
  }
}
