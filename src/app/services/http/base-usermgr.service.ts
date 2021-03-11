import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LOCALE_ID, Inject } from '@angular/core';

import { BaseHttpService } from './base-http.service';
import { HOST_NAME } from 'src/app/app-routing.module';

@Injectable({
  providedIn: 'root'
})
export class BaseUsermgrService extends BaseHttpService {

  constructor(
    http: HttpClient,
    //@Inject(LOCALE_ID) public locale: string,
    //@Inject(HOST_NAME) public hostName
  ) {
    super(
      http,
      //locale
    )
  }

  protected postRequest<T>(url: string, formGroup: FormGroup) {
    const formData = new FormData();
    Object.keys(formGroup.value).forEach(key => {
      formData.append(key, formGroup.value[key]);
    });
    console.log(formData)

    return this.http.post<T>(this.apiUrl, formData)
  }

}
