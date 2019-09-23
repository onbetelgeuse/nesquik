import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './material.module';
import { AuthModule } from './auth/auth.module';
import { AppHttpInterceptorProvider } from './app.interceptor';
import { AuthHttpInterceptorProvider } from './auth/auth.interceptor';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderModule } from '../loader/loader.module';
import { LoaderInterceptorProvider } from '../loader/service/loader.interceptor';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SharedModule } from './shared/shared.module';
import { ServerErrorInterceptorProvider } from './server-error.interceptor';
import { environment } from '../environments/environment';
import { ToastModule } from './toast/toast.module';
import { AppErrorHandler } from './app.errorhandler';
import { NotificationService } from './shared/services/notification.service';
import { ErrorsService } from './shared/services/errors.service';
import { ToastService } from './toast/service/toast.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const config: SocketIoConfig = { url: environment.socketio.url, options: {} };

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AuthModule,
    LoaderModule,
    SocketIoModule.forRoot(config),
    SharedModule,
    ToastModule,
  ],
  providers: [
    ToastService,
    NotificationService,
    ErrorsService,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler,
    },
    AppHttpInterceptorProvider,
    AuthHttpInterceptorProvider,
    ServerErrorInterceptorProvider,
    LoaderInterceptorProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
