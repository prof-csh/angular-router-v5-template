import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { UsersModule } from './users.module';
import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { Home } from './home.component';
import { NotFound } from './notfound.component';
import { Banner } from './banner.component';

import { LoginService } from './login.service';
import { AuthCanActivate } from './auth.canActivate';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    UsersModule,
    AppRouting,
  ],
  declarations: [
    AppComponent,
    Home,
    NotFound,
    Banner
  ],
  providers: [
    LoginService,
    AuthCanActivate
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
