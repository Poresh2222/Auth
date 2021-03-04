import { Component, EventEmitter, Inject, Output, PLATFORM_ID } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginEmailService } from 'src/app/services/auth/login/login-email.service';

import { UserInfo } from 'src/app/services/auth/login/login.models';
import { BasePageComponent } from '../../base-page/base-page.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BasePageComponent {
  formSubmited: boolean = false;
  loginResponce: UserInfo;

  loginForm = this.formBuilder.group({
    login: ['', [Validators.required]],
    password: ['', Validators.required]
  });

  @Output() closeEvent = new EventEmitter();

  closeDialog(url:string) {
    this.closeEvent.next(url);
  }

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private loginService: LoginEmailService) {
    super()
  }

  ngOnInit() {

  }

  onCreateAccountRequested() {
    
  }

  onSubmit(loginForm) {
    if (this.formSubmited) return;
    this.formSubmited = true;
    console.log(loginForm);
    console.log(this.formSubmited)

  }

  signup() {
    this.closeDialog('../signup');
  }

  lostPassword() {
    this.closeDialog('/lost-password');
  }

}
