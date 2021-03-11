import { Component, EventEmitter, Inject, Output, PLATFORM_ID } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { takeUntil } from 'rxjs/operators';
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
  loginResponse: UserInfo;

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
    private loginService: LoginEmailService
    ) {
    super()
  }

  ngOnInit() {

  }

  onCreateAccountRequested() {
    
  }

  onSubmit(loginForm) {
    if (this.formSubmited) return;
    this.formSubmited = true;
    this.loginService.requestLoginUser(loginForm).pipe(takeUntil(this.unsubscribe)).subscribe((resp) => {
      console.log('login status', resp)
      this.loginResponse = resp;
      this.loginSuccessfull();
    })

  }

  loginSuccessfull() {
    this.closeDialog('../');
  }

  signup() {
    this.closeDialog('../signup');
  }

  lostPassword() {
    this.closeDialog('/'+'lostpassword');
  }

}
