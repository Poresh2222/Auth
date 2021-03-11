import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';

export const LOGIN_EMAIL_URL: string = '/user/login'

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  constructor(
    http: HttpClient
  ) { }

}
