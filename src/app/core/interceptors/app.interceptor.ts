import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    let appReq = req;

    if (!this.contains([environment.api.documents + '/upload'], req.url)) {
      appReq = this.setHeaders(req);
    }
    return next.handle(appReq);
  }

  private setHeaders(req: HttpRequest<any>): HttpRequest<any> {
    return req.clone({
      setHeaders: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }

  private contains(items: string[] = [], url: string): boolean {
    return items.some(pattern => url.match(pattern));
  }
}

export const AppHttpInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppHttpInterceptor,
  multi: true,
};
