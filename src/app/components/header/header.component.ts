import { Component, OnInit } from '@angular/core';

import { DetectDeviceService } from 'src/app/services/utils/detect-device.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  diviceType: boolean;

  constructor(
    private deviceService: DetectDeviceService
  ) { }

  ngOnInit(): void {
    this.diviceType = this.deviceService.isDesktop()
  }

}
