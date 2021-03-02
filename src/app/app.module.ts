import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
