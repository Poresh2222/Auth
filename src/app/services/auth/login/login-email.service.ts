import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { LOGIN_EMAIL_URL } from '../../http/base-http.service';
import { BaseUsermgrService } from '../../http/base-usermgr.service';
import { LoginStatusService } from './login-status.service';
import { LoggedStatus, LoginEmailResponse, UserInfo } from './login.models';
import { HOST_NAME } from 'src/app/app-routing.module';

@Injectable({
  providedIn: 'root'
})
export class LoginEmailService extends BaseUsermgrService {

  constructor(
    http: HttpClient,
    private loginStatusService: LoginStatusService,
    //@Inject(LOCALE_ID) public locale: string,
    //@Inject(HOST_NAME) public hostName
    ) { 
    super(
      http,
      //locale,
      //hostName,
    ) }

  requestLoginUser(loginForm: FormGroup): Observable<UserInfo> {

    return super.postRequest<LoginEmailResponse>(LOGIN_EMAIL_URL, loginForm)
      .pipe(
        switchMap((resp) => {
          this.loginStatusService.updateUserInfo({
            isLogged: resp.status == "success" ? LoggedStatus.logged : LoggedStatus.notLogged,
            username: resp.user ? resp.user : null,
          });
          return this.loginStatusService.getLoginStatus();
        })
      )
    
  }

}
