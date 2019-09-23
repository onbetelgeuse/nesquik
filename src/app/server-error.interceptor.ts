import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      }),
    );
  }
}

export const ServerErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ServerErrorInterceptor,
  multi: true,
};
