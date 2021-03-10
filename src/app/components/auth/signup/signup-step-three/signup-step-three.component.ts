import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { map, takeUntil } from 'rxjs/operators';
import { AnimationOptions } from 'ngx-lottie';

import { BasePageComponent } from 'src/app/components/base-page/base-page.component';

@Component({
  selector: 'app-signup-step-three',
  templateUrl: './signup-step-three.component.html',
  styleUrls: ['./signup-step-three.component.scss']
})
export class SignupStepThreeComponent extends BasePageComponent {

  @Output() isCompleted = new EventEmitter<string>();

  @Input()
  set content(contentInput: SafeHtml) {
    this._content = contentInput;
    console.log(this._content)
  }

  options: AnimationOptions = {
    path: 'assets/animations/succeeded.json',
    autoplay: true,
    loop: false,
  };

  get content(): SafeHtml { return this._content; }

  constructor() {
    super() 
  }

  private _content: SafeHtml;

  ngOnInit(): void {
  }

  deposit() {
    this.isCompleted.next('/');
  }
  close() {
    this.isCompleted.next('/');
  }

}
