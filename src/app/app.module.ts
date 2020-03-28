import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderModule } from './modules/loader/loader.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './modules/material/material.module';
import { ToastModule } from './modules/toast/toast.module';
import { AppErrorHandlerProvider } from './core/handlers/app-error.handler';
import { AppHttpInterceptorProvider } from './core/interceptors/app.interceptor';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdminModule } from './admin/admin.module';
import { AboutModule } from './about/about.module';
import { LoaderInterceptorProvider } from './modules/loader/interceptor/loader.interceptor';
import { AppErrorInterceptorProvider } from './core/interceptors/app-error.interceptor';
import { AuthHttpInterceptorProvider } from './core/interceptors/auth.interceptor';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { SocketIoModule } from 'ngx-socket-io';
import { socketIoConfig } from './config/socketio.config';

import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [AppComponent, FooterComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoaderModule,
    ToastModule,
    AuthModule,
    DashboardModule,
    AdminModule,
    AboutModule,
    MaterialModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'chlt',
      // headerName: 'X-XSRF-TOKEN', // this is optional
    }),
    SocketIoModule.forRoot(socketIoConfig),
    NgSelectModule,
  ],
  providers: [
    AppErrorHandlerProvider,
    AppErrorInterceptorProvider,
    AuthHttpInterceptorProvider,
    AppHttpInterceptorProvider,
    LoaderInterceptorProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
