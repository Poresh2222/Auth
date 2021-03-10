import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { takeUntil } from 'rxjs/operators';

import { BasePageComponentWithDialogs } from 'src/app/components/base-page/base-page.component';
import { RegistrationFields, RegistrationStepResponse } from 'src/app/services/signup/registration.models';
import { DetectDeviceService } from 'src/app/services/utils/detect-device.service';

@Component({
  selector: 'app-signup-step-one',
  templateUrl: './signup-step-one.component.html',
  styleUrls: ['./signup-step-one.component.scss']
})
export class SignupStepOneComponent extends BasePageComponentWithDialogs {

  registerForm1 = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(7)]),
    current_step: new FormControl('', [])
  });

  @Output() isCompleted = new EventEmitter<boolean>();
  private _registrationFields:RegistrationFields;

  @Input()
  set registrationFields(name: RegistrationFields) {
    this._registrationFields = name;
  }

  get registrationFields(): RegistrationFields { return this._registrationFields; }

  formSubmited: boolean = false;
  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    errorDialog: MatDialog,
    //private registrationService: RegistrationService,
    private detectDesktopService: DetectDeviceService,
    ) {
    super(
      errorDialog
    ) 
  }

  ngOnInit(): void {
  }

  onSubmit(registerForm1) {
    if (this.formSubmited || !this.registerForm1.valid) return;
    this.isCompleted.next(true)
  }

}
