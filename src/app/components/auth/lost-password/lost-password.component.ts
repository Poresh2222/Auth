import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormBuilder, Validators } from '@angular/forms';

import { BasePageComponent } from '../../base-page/base-page.component';
//import { LostPasswordService } from 'src/app/services/auth/lost-password/lost-password.service';
//import { LostPasswordResponse } from 'src/app/services/auth/lost-password/lost-password.models';

@Component({
  selector: 'app-lost-password',
  templateUrl: './lost-password.component.html',
  styleUrls: ['./lost-password.component.scss']
})
export class LostPasswordComponent extends BasePageComponent {

  //page: SystemPage;   apolo
  body: SafeHtml;

  lostPasswordResponse: string;

  lostPasswordForm = this.formBuilder.group({
    mail: ['', [Validators.required,Validators.email]],
  });
 
  constructor(
    private formBuilder: FormBuilder
  ) {super() }

  ngOnInit(): void {
  }

  onSubmit(lostPasswordForm) {

  }

}
