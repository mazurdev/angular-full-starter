// core
import {ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID, Renderer2} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
// utils
import {routeAnimations} from '@shared/utils/route-animation';
import {LocalStorageService} from '@shared/services/local-storage.service';
import {DeviceDetectorService} from 'ngx-device-detector';
import {MatSnackBar} from '@angular/material';
declare var AOS: any;
import {VARIABLES} from '@shared/helpers/variables';
import {ICONS} from '@shared/helpers/icons';
import {IosPWAComponent} from '@features/ios-pwa/ios-pwa.component';

@Component({
  selector: 'nv-root',
  templateUrl: './app.component.html',
  styles: [`
    ::ng-deep router-outlet ~ * {
      position: absolute;
      height: 100%;
      width: 100%;
    }
  `],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {

  // icons
  iconCookie = ICONS.iconCookie;

  isBrowser;
  deviceBrowser = null;
  isMobile = null;
  // localStorage
  cookieConsent = false;
  cookieConsentValueLocalStorage;

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
    // DOM
    private r: Renderer2,
    // services
    private localStorage: LocalStorageService,
    // utils
    private deviceService: DeviceDetectorService,
    @Inject(PLATFORM_ID) private platformId,
    private cdr: ChangeDetectorRef,
    private toast: MatSnackBar
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.cookieConsentValueLocalStorage = this.localStorage.get('Cookie-Consent');
  }

  ngOnInit() {
    // welcome
    console.log('%c ANGULAR FULL STARTER 😎 | Dev team', 'background:#E62893; color:#ffffff; padding:10px');
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

    // AOS animations
    if (this.isBrowser) {
      AOS.init({
        disable: 'mobile',
        once: true,
        useClassNames: true,
        delay: 50,
        duration: VARIABLES.ANIM_DURATION,
        easing: 'ease-in-out'
      });
    }

    // localStorage
    if (this.cookieConsentValueLocalStorage !== 'Allow') {
      this.cookieConsent = true;
    }
    // webp images
    if (this.isMobile && this.deviceBrowser.os === 'iOS') {
      this.removeWebpClass();
    }
  }

  allowCookies() {
    this.localStorage.set('Cookie-Consent', 'Allow');
    this.r.addClass(document.querySelector('.cookie-consent'), 'hide');
  }

  getSafariDevice() {
    this.deviceBrowser = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
    // console.log(this.deviceBrowser.os);
    // console.log(this.isMobile);
  }

  removeWebpClass() {
    this.r.removeClass(document.querySelector('html'), 'webp');
    this.r.removeClass(document.querySelector('html'), 'webp-alpha');
    this.r.removeClass(document.querySelector('html'), 'webp-animation');
    this.r.removeClass(document.querySelector('html'), 'webp-lossless');
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
