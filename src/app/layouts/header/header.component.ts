// core
import {Component} from '@angular/core';
// utils
import {ViewportScroller} from '@angular/common';
import {VARIABLES} from '@shared/helpers/variables';
import {ROUTES} from '@shared/helpers/routes';

@Component({
  selector: 'fs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  APP_LABEL = VARIABLES.APP_LABEL;
  HOME = ROUTES.HOME;
  LAZY_NESTED = ROUTES.LAZY_NESTED;

  nav = [
    {url: this.HOME, name: 'Home', exact: true},
    {url: this.LAZY_NESTED, name: 'Lazy Nested', exact: false},
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
