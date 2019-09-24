// core
import {Component} from '@angular/core';
// utils
import {ROUTES} from '@shared/func/routes';

@Component({
  selector: 'nv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  // routes
  HOME = ROUTES.HOME;
  LAZY_NESTED = ROUTES.LAZY_NESTED;

  currentYear: number = new Date().getFullYear();

  linksPrivacy = [
    {url: this.LAZY_NESTED, name: 'Terms Of Use', label: 'Go to Terms Of Use'},
    {url: this.LAZY_NESTED, name: 'Privacy Policy', label: 'Go to Privacy Policy'},
    {url: this.LAZY_NESTED, name: 'Cookie Policy', label: 'Go to Cookie Policy'}
  ];
  trackByItem(index, item) {
    return (item.id);
  }

  constructor() {}

}
