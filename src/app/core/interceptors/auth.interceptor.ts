import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { AccessToken } from '../../shared/models/access-token.model';

export class AuthHttpInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  private setHeaders(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token,
      },
    });
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    let authReq = req;
    const accessToken: AccessToken = this.authService.getAccessToken();

    if (accessToken) {
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
