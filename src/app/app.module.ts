import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedMaterialModule } from './modules/shared-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { MainAuthComponent } from './components/auth/main-auth/main-auth.component';
import { BaseComponent } from './components/base/base.component';
import { BasePageComponent } from './components/base-page/base-page.component';
import { LoginButtonComponent } from './components/auth/login/login-button/login-button.component';
import { LoginDialogComponent } from './components/auth/login/login-dialog/login-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsernameComponent } from './components/auth/username/username.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SignupButtonComponent } from './components/auth/signup/signup-button/signup-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartPageComponent } from './components/start-page/start-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainAuthComponent,
    BaseComponent,
    BasePageComponent,
    LoginButtonComponent,
    LoginDialogComponent,
    HeaderComponent,
    FooterComponent,
    UsernameComponent,
    SignupComponent,
    SignupButtonComponent,
    StartPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    SharedMaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
