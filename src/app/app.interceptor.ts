import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor() {}

  private setHeaders(req: HttpRequest<any>): HttpRequest<any> {
    return req.clone({
      setHeaders: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    let appReq = req;

    if (!req.url.match(/openweathermap.org/)) {
      appReq = this.setHeaders(req);
    }
    return next.handle(appReq);
  }
}

export const AppHttpInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppHttpInterceptor,
  multi: true,
};
