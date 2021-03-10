import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LottieModule } from 'ngx-lottie';

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
import { SignupButtonComponent } from './components/auth/signup/signup-button/signup-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartPageComponent } from './components/start-page/start-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ErrorDialogComponent } from './components/dialog/error-dialog/error-dialog.component';
import { SuccessDialogComponent } from './components/dialog/success-dialog/success-dialog.component';
import { CloseDialogButtonComponent } from './components/dialog/close-dialog-button/close-dialog-button.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { LostPasswordComponent } from './components/auth/lost-password/lost-password.component';
import { SignupDialogComponent } from './components/auth/signup/signup-dialog/signup-dialog.component';
import { SignupFormComponent } from './components/auth/signup/signup-form/signup-form.component';
import { SignupStepOneComponent } from './components/auth/signup/signup-step-one/signup-step-one.component';
import { SignupStepTwoComponent } from './components/auth/signup/signup-step-two/signup-step-two.component';
import { SignupStepThreeComponent } from './components/auth/signup/signup-step-three/signup-step-three.component';
import { StepperComponent } from './components/auth/signup/stepper/stepper.component';

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
    SignupButtonComponent,
    StartPageComponent,
    HomePageComponent,
    ErrorDialogComponent,
    SuccessDialogComponent,
    CloseDialogButtonComponent,
    LogoutComponent,
    LostPasswordComponent,
    SignupDialogComponent,
    SignupFormComponent,
    SignupStepOneComponent,
    SignupStepTwoComponent,
    SignupStepThreeComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    SharedMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LottieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
