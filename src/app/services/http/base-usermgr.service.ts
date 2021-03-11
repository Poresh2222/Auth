import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BaseUsermgrService {

  constructor(
    http: HttpClient
  ) { }

  protected postRequest<T>(url: string, formGroup: FormGroup) {
    const formData = new FormData();
    Object.keys(formGroup.value).forEach(key => {
      formData.append(key, formGroup.value[key]);
    });
    console.log(formData)
  }
}
