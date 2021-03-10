import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

import { BasePageComponentWithDialogs } from 'src/app/components/base-page/base-page.component';
import { RegistrationFields } from 'src/app/services/signup/registration.models';

@Component({
  selector: 'app-signup-step-two',
  templateUrl: './signup-step-two.component.html',
  styleUrls: ['./signup-step-two.component.scss']
})
export class SignupStepTwoComponent extends BasePageComponentWithDialogs {

  formSubmited: boolean = false;

  termsUrl: string;

  @Output() isCompleted = new EventEmitter<boolean>();

  registerForm2 = this.formBuilder.group({
    country: ['', [Validators.required]],
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    currency: ['', [Validators.required]],
    accept_terms: ['', [Validators.required]],
    marketing_consents: [true, [Validators.required]],
    current_step: new FormControl('', [])
  });

  currencies: [{ display: string, value: string }];
  countries: [{ display: string, value: string }];
  ipCountry: string;

  private _registrationFields: RegistrationFields;

  @Input()
  set registrationFields(name: RegistrationFields) {
    this._registrationFields = name;
    if (this._registrationFields) {
      console.log(this._registrationFields)
    }

  }

  get registrationFields(): RegistrationFields { return this._registrationFields; }


  constructor(
    private formBuilder: FormBuilder,
    //private registrationService: RegistrationService,
    errorDialog: MatDialog,
    ) {
    super(
      errorDialog
    ) 
  }

  updateFields(fields: RegistrationFields) {
    this.registerForm2.get('country').setValue(fields.user_ip_country);
    this.countries = fields.fields.country.choices;
    this.currencies = fields.fields.currency.choices;
  }

  ngOnInit(): void {
  }

  onSubmit(registerForm2) {
    this.isCompleted.next(true);
  }

}
