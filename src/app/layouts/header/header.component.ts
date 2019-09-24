// core
import {Component} from '@angular/core';
// utils
import {ROUTES} from '@shared/func/routes';

@Component({
  selector: 'nv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  HOME = ROUTES.HOME;
  LAZY_NESTED = ROUTES.LAZY_NESTED;

  nav = [
    {url: this.LAZY_NESTED, name: 'Home', label: 'Go to Home', exact: true},
    {url: this.LAZY_NESTED, name: 'About Us', label: 'Go to About', exact: false},
    {url: this.LAZY_NESTED, name: 'Contact Us', label: 'Go to Contact Us', exact: false}
  ];
  trackByItem(index, item) {
    return (item.id);
  }

  constructor(
  ) {
  }

}
