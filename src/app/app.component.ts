import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

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

  constructor(
    private deviceService: DetectDeviceService
  ) {}

  ngOnInit() {
    console.log(this.deviceService.isDesktop()),
    console.log(this.screenWidth = window.innerWidth),
    console.log(this.screenHeight = window.innerHeight)
  }

  deviceType() {
    this.deviceService.isDesktop()
  }

}
