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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AuthModule
  ],
  providers: [
    AppHttpInterceptorProvider,
    AuthHttpInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
