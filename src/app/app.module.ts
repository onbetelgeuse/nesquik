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

@NgModule({
  declarations: [AppComponent, FooterComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoaderModule,
    MaterialModule,
    ToastModule,
  ],
  providers: [AppErrorHandlerProvider, AppHttpInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
