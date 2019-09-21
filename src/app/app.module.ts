import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

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
  ],
  providers: [
    AppHttpInterceptorProvider,
    AuthHttpInterceptorProvider,
    LoaderInterceptorProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
