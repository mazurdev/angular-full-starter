import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {slideInAnimation} from './shared/utils/route-animation';
import {CookieService} from 'ngx-cookie-service';
import {LocalStorageService} from './shared/services/local-storage.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'nv-root',
  template: `
    <div [@routeAnimations]="o && o.activatedRouteData && o.activatedRouteData['animation']">
      <router-outlet #o="outlet"></router-outlet>
      <ngx-json-ld [json]="schema"></ngx-json-ld>
    </div>
  `,
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {

  isBrowser;
  cookieValue;
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
    @Inject(PLATFORM_ID) private platformId
  ) {
    this.cookieValue = this.localStorage.get('Cookie-Title');
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    // isBrowser
    if (this.isBrowser) {
    }
  }

}
