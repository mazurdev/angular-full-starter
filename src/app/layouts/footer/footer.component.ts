// core
import {Component} from '@angular/core';
// utils
import {VARIABLES} from '@shared/helpers/variables';
import {ROUTES} from '@shared/helpers/routes';

@Component({
  selector: 'fs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  APP_LABEL = VARIABLES.APP_LABEL;
  // routes
  HOME = ROUTES.HOME;
  LAZY_NESTED = ROUTES.LAZY_NESTED;

  currentYear: number = new Date().getFullYear();

  linksPrivacy = [
    {url: this.LAZY_NESTED, name: 'Terms Of Use'},
    {url: this.LAZY_NESTED, name: 'Privacy Policy'},
    {url: this.LAZY_NESTED, name: 'Cookie Policy'}
  ];

  trackByItem(index, item) {
    return (item.id);
  }

}
