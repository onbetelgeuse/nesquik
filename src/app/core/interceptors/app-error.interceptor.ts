import {
  HttpInterceptor,
  HttpHandler,
  HttpErrorResponse,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';

export class AppErrorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.authService.logout();
        } else {
          return throwError(error);
        }
      }),
    );
  }
}

export const AppErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppErrorInterceptor,
  deps: [AuthService],
  multi: true,
};
