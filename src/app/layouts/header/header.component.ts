// core
import {Component, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
// utils
import {WINDOW} from '@ng-toolkit/universal';
import {isPlatformBrowser} from '@angular/common';
import {animations} from '../../shared/utils/animations';
// jquery
declare var $: any;

@Component({
  selector: 'nv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [animations]
})
export class HeaderComponent implements OnInit {

  isBrowser;
  visibilityChanged = 'shown';
  visibilityChangedSticky = 'hidden';

  nav = [
    {url: '/lazy/nested', name: 'Home', label: 'Go to Home', exact: true},
    {url: '/lazy/nested', name: 'About Us', label: 'Go to About', exact: false},
    {url: '/lazy/nested', name: 'Contact Us', label: 'Go to Contact Us', exact: false}
  ];
  trackByItem(index, item) {
    return (item.id);
  }

  constructor(
    @Inject(WINDOW) private window: Window,
    @Inject(PLATFORM_ID) private platformId,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // isBrowser
    if (this.isBrowser) {
      if (this.window.innerWidth > 812) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          this.visibilityChanged = 'hidden';
          this.visibilityChangedSticky = 'shown';
        } else {
          this.visibilityChangedSticky = 'hidden';
          this.visibilityChanged = 'shown';
        }
      }
    }


  }

  ngOnInit() {
  }

}
