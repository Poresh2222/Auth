import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class DetectDeviceService {

  constructor(
    private deviceService: DeviceDetectorService
  ) { }

  isDesktop() {
    return this.deviceService.isDesktop();
  }

}
