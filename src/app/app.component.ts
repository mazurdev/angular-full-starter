// core
import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
// utils
import {slideInAnimation} from './shared/utils/route-animation';
import {CookieService} from 'ngx-cookie-service';
import {LocalStorageService} from './shared/services/local-storage.service';
import {DeviceDetectorService} from 'ngx-device-detector';
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

  schema = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    'author': 'Title',
    'contentLocation': '200 S. WACKER DR, SUITE 2400 CHICAGO, IL 60606',
    'description': 'Description',
    'name': 'Title',
    'url': 'https://example.com'
  };

  constructor(
    private cookieService: CookieService,
    private localStorage: LocalStorageService,
    private deviceService: DeviceDetectorService,
    @Inject(PLATFORM_ID) private platformId
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
