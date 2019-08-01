// core
import {ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
// utils
import {fadeAnimation} from './shared/utils/route-animation';
import {CookieService} from 'ngx-cookie-service';
import {LocalStorageService} from './shared/services/local-storage.service';
import {DeviceDetectorService} from 'ngx-device-detector';
import {delayPreloader} from './shared/func/variables';
// IOS PWA
import {IosPWAComponent} from './shared/ios-pwa/ios-pwa.component';
import {MatSnackBar} from '@angular/material';
// jquery
declare var $: any;

@Component({
  selector: 'nv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {

  loading: boolean = true;
  isBrowser;
  cookieValue;
  deviceBrowser = null;
  isMobile = null;

  schema = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    author: 'Author',
    contentLocation: 'Chapel Hill, NC',
    description: 'Description',
    name: 'Title',
    url: 'https://example.com'
  };

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
    // Detects if device is on iOS
    this.getSafariDevice();
    if (this.isBrowser && this.deviceBrowser.browser === 'Safari') {
      const isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test(userAgent);
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
        // hide preloader
        this.loading = false;
        // show scroll
        this.showScrollWidthNoLoad();
        // webp images
        if (this.isMobile && this.deviceBrowser.os === 'iOS') {
          this.removeWebpClass();
        }
      }, delayPreloader);

    }
  }

  getSafariDevice() {
    this.deviceBrowser = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
    // console.log(this.deviceBrowser.os);
    // console.log(this.isMobile);
  }

  removeWebpClass() {
    $('html').removeClass('webp webp-alpha webp-animation webp-lossless');
  }

  showScrollWidthNoLoad() {
    $('html').addClass('show-scroll');
  }


  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
