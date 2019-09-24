import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Observable } from 'rxjs';
import { AccessToken } from 'src/app/shared/models/access-token.model';

export class AuthHttpInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  private setHeaders(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({ setHeaders: { Authorization: 'Bearer ' + token } });
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    let authReq = req;
    const accessToken: AccessToken = this.authService.getAccessToken();

    if (accessToken && !req.url.match(/openweathermap.org/)) {
      authReq = this.setHeaders(req, accessToken.token);
    }

    return next.handle(authReq);
  }
}

export const AuthHttpInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthHttpInterceptor,
  deps: [AuthService],
  multi: true,
};
