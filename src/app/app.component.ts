// core
import {ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
// utils
import {slideInAnimation} from './shared/utils/route-animation';
import {CookieService} from 'ngx-cookie-service';
import {LocalStorageService} from './shared/services/local-storage.service';
import {DeviceDetectorService} from 'ngx-device-detector';
// IOS PWA
import {IosPWAComponent} from './shared/ios-pwa/ios-pwa.component';
import {MatSnackBar} from '@angular/material';
// jquery
declare var $: any;

@Component({
  selector: 'nv-root',
  templateUrl: './app.component.html',
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {

  loading: boolean = true;
  isBrowser;
  cookieValue;
  deviceInfo = null;

  constructor(
    private cookieService: CookieService,
    private localStorage: LocalStorageService,
    private deviceService: DeviceDetectorService,
    @Inject(PLATFORM_ID) private platformId,
    private cdr: ChangeDetectorRef,
    private toast: MatSnackBar
  ) {
    this.cookieValue = this.localStorage.get('Cookie-Title');
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    // detect device
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    // const isTablet = this.deviceService.isTablet();
    // const isDesktopDevice = this.deviceService.isDesktop();

    // Detects if device is on iOS
    if (this.isBrowser && this.deviceInfo.browser === 'Safari') {
      const isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test( userAgent );
      };
      // Detects if device is in standalone mode
      const isInStandaloneMode = () => ('standalone' in (window as any).navigator) && ((window as any).navigator.standalone);

      // Checks if should display install popup notification:
      if (isIos() && !isInStandaloneMode()) {
        setTimeout(() => {
          this.toast.openFromComponent(IosPWAComponent, {
            // duration: 8000,
            horizontalPosition: 'start',
            panelClass: ['mat-elevation-z3']
          });
          this.cdr.detectChanges();
        }, 5000);

      }
    }

    // isBrowser
    if (this.isBrowser) {

      setTimeout(() => {
        this.loading = false;
        this.showScrollWidthNoLoad();
      }, 1400);
      if (isMobile && this.deviceInfo.os === 'iOS') {
        this.removeWebpClass();
      }
    }
  }

  removeWebpClass() {
    // const htmlEl = document.querySelector('html');
    // htmlEl.classList.remove('webp'); // + webp-alpha webp-animation webp-lossless
    $('html').removeClass('webp webp-alpha webp-animation webp-lossless');
  }

  showScrollWidthNoLoad() {
    // const htmlEl = document.querySelector('html');
    // const bodyEl = document.querySelector('body');
    // htmlEl.classList.add('show-scroll');
    // bodyEl.classList.add('show-scroll');
    $('html, body').addClass('show-scroll');
  }

}
