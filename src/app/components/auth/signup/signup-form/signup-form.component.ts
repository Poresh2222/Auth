import { AfterViewInit, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { BasePageComponent } from 'src/app/components/base-page/base-page.component';
import { RegistrationFields, RegistrationStepResponse, RegistrationCmsInfo } from 'src/app/services/signup/registration.models';
import { LoaderService } from 'src/app/services/utils/loader.service';

enum steps  {
  stepOne = "basic-form",
  stepTwo = "home-address"
}

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent extends BasePageComponent implements AfterViewInit {

  isLinear = true;
  isCompleted1 = false;
  isCompleted2 = false;
  isEditable = false;
  fieldResponse1: RegistrationFields;
  fieldResponse2: RegistrationFields;
  isLoading = true;
  selectedIndex = 0;

  cmsData: RegistrationCmsInfo;

  @Output() closeEvent = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    //private registrationService: RegistrationService,
    //private cmsDataService: RegistartionCmsDataService,
    private loaderService: LoaderService,
    private sanitizer: DomSanitizer
  ) {super() }

  ngOnInit() {
    this.loaderService.show();

    //cmsDataService
  }

  completeStepOne(result:boolean){
    this.isCompleted1 = result;
    this.selectedIndex = 1; 
    // this.stepper.selected.completed = result;
    if (this.isCompleted1) {
      // this.stepper.next();
    }
  }

  completeStepTwo(result:boolean){
    this.isCompleted2 = result;
    this.selectedIndex = 2; 
    // this.stepper.selected.completed = result;
    // if (this.isCompleted2) this.stepper.next();
  }

  completeStepThree(url:string){
    this.closeDialog(url);
  }

  ngAfterViewInit() {

  }

  closeDialog(url: string): void {
    this.closeEvent.next(url);
  }

}
