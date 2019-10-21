// core
import {Component} from '@angular/core';
// utils
import {VARIABLES} from '@shared/helpers/variables';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'nv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  APP_LABEL = VARIABLES.APP_LABEL;
  HOME = VARIABLES.HOME;
  LAZY_NESTED = VARIABLES.LAZY_NESTED;

  nav = [
    {url: this.LAZY_NESTED, name: 'Home', exact: true},
    {url: this.LAZY_NESTED, name: 'About Us', exact: false},
    {url: this.LAZY_NESTED, name: 'Contact Us', exact: false},
    {name: 'Go to second section', scrollToEl: 'SecondSection'}
  ];

  constructor(
    private vps: ViewportScroller
  ) {}

  scrollToElement($element): void {
    this.vps.scrollToAnchor($element);
  }

  trackByItem(index, item) {
    return (item.id);
  }

}
