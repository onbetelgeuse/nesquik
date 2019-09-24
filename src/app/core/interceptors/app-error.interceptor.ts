import {
  HttpInterceptor,
  HttpHandler,
  HttpErrorResponse,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class AppErrorInterceptor implements HttpInterceptor {
  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      }),
    );
  }
}

export const AppErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppErrorInterceptor,
  multi: true,
};
