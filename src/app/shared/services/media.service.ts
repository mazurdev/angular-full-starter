// core
import {Injectable} from '@angular/core';
// utils
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {DeviceDetectorService} from 'ngx-device-detector';

@Injectable()
export class MediaService {

  isMobile;
  is1280;
  deviceInfo = null;
  disableWebp = false;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private deviceService: DeviceDetectorService
  ) {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    if (this.deviceInfo.browser === 'Safari' || this.deviceInfo.os === 'iOS') {
      this.disableWebp = true;
    }
    // is1280
    this.breakpointObserver
      .observe(['(min-width: 1280px)'])
      .subscribe((state: BreakpointState) => {
        this.is1280 = !state.matches;
      });
    // is475
    this.breakpointObserver
      .observe(['(min-width: 475px)'])
      .subscribe((state: BreakpointState) => {
        this.isMobile = !state.matches;
      });
  }

}
