import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

import { DetectDeviceService } from './services/utils/detect-device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Auth';
  @ViewChild('sidenav') sidenav: MatSidenav;
  public screenWidth: any;
  public screenHeight: any;
  public type: boolean;

  constructor(
    public router: Router,
    private deviceService: DetectDeviceService
  ) {}

  ngOnInit() {
    this.router.navigate(['startpage'])
    console.log(this.deviceService.isDesktop()),
    console.log(this.screenWidth = window.innerWidth),
    console.log(this.screenHeight = window.innerHeight)
  }

  deviceType(): boolean {
    if (this.deviceService.isDesktop() == true) {
      return true
    }
    else false
  }

}
