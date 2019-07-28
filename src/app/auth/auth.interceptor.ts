import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';


export class AuthHttpInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    private setHeaders(req: HttpRequest<any>, token: string): HttpRequest<any> {
        return req.clone({ setHeaders: { Authorization: 'Bearer ' + token } });
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        let access_token = this.authService.getAccessToken();

        if (access_token && !req.url.match(/openweathermap.org/)) {
            authReq = this.setHeaders(req, access_token.token);
        }

        return next.handle(authReq);
    }

}

export const AuthHttpInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    deps: [AuthService],
    multi: true
}