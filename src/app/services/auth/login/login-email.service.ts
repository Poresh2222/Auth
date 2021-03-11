import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { LOGIN_EMAIL_URL } from '../../http/base-http.service';
import { BaseUsermgrService } from '../../http/base-usermgr.service';
import { LoginEmailResponse, UserInfo } from './login.models';

@Injectable({
  providedIn: 'root'
})
export class LoginEmailService extends BaseUsermgrService {

  constructor(
    http: HttpClient
    ) { 
    super(
      http,
    ) }

  requestLoginUser(loginForm: FormGroup): Observable<UserInfo> {

    return super.postRequest<LoginEmailResponse>(LOGIN_EMAIL_URL, loginForm).pipe()
  }
}
