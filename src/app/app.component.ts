// core
import {ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID, Renderer2} from '@angular/core';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
// utils
import {LocalStorageService} from '@shared/services/local-storage.service';
import {DeviceDetectorService} from 'ngx-device-detector';
import {MatSnackBar} from '@angular/material/snack-bar';
import {VARIABLES} from '@shared/helpers/variables';
import {ICONS} from '@shared/helpers/icons';
import {IosPWAComponent} from '@features/ios-pwa/ios-pwa.component';
import {routeAnimation} from '@shared/helpers/route-animation';
import {WINDOW} from '@ng-toolkit/universal';
import {MediaService} from '@shared/services/media.service';
import {environment} from '@environments/environment';
declare var AOS: any;

@Component({
  selector: 'fs-root',
  templateUrl: './app.component.html',
  styles: [`
      main {
          transition: opacity .5s cubic-bezier(.55, .085, .68, .53);
      }
      main:not(.visible) {
          opacity: 0;
      }
      main.visible {
          opacity: 1;
      }
      ::ng-deep router-outlet ~ * {
          position: absolute;
          height: 100%;
          width: 100%;
      }
  `],
  animations: [routeAnimation]
})
export class AppComponent implements OnInit {

  // icons
  iconCookie = ICONS.iconCookie;

  isBrowser;
  deviceInfo = null;
  isMobile = null;
  disableWebp;
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
    url: environment.baseUrl
  };

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
    @Inject(PLATFORM_ID) private platformId,
    private r: Renderer2,
    private localStorage: LocalStorageService,
    private deviceService: DeviceDetectorService,
    private cdr: ChangeDetectorRef,
    private toast: MatSnackBar,
    private mediaService: MediaService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.disableWebp = this.mediaService.disableWebp;
    if (this.isBrowser) {
      this.cookieConsentValueLocalStorage = this.localStorage.get('Cookie-Consent');
    }
  }

  ngOnInit() {
    // welcome
    console.log('%c ANGULAR FULL STARTER 😎 | Dev team', 'background:#E62893; color:#ffffff; padding:10px');
    // Detects if device is on iOS
    this.getSafariDevice();
    if (this.isBrowser && this.isMobile && this.disableWebp) {
      const isIos = () => {
        const userAgent = this.window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test(userAgent);
      };
      // Detects if device is in standalone mode
      const isInStandaloneMode = () => ('standalone' in (this.window as any).navigator) && ((this.window as any).navigator.standalone);

      // Checks if should display install popup notification:
      if (isIos() && !isInStandaloneMode()) {
        setTimeout(() => {
          this.toast.openFromComponent(IosPWAComponent, {
            horizontalPosition: 'start',
            panelClass: ['pwa-shack-bar']
          });
          this.cdr.detectChanges();
        }, VARIABLES.DELAY_SHOW_IOS_PWA);

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
    if (this.disableWebp) {
      this.r.removeClass(this.document.querySelector('html'), 'webp');
      this.r.removeClass(this.document.querySelector('html'), 'webp-alpha');
      this.r.removeClass(this.document.querySelector('html'), 'webp-animation');
      this.r.removeClass(this.document.querySelector('html'), 'webp-lossless');
    }
  }

  allowCookies() {
    if (this.isBrowser) {
      this.localStorage.set('Cookie-Consent', 'Allow');
    }
    this.r.addClass(this.document.querySelector('.cookie-consent'), 'hide');
  }

  getSafariDevice() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
