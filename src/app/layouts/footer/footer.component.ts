import {Component} from '@angular/core';

@Component({
  selector: 'nv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  currentYear: number = new Date().getFullYear();

  linksPrivacy = [
    {url: '/lazy/articles', name: 'Terms Of Use', label: 'Go to Terms Of Use'},
    {url: '/lazy/articles', name: 'Privacy Policy', label: 'Go to Privacy Policy'},
    {url: '/lazy/articles', name: 'Cookie Policy', label: 'Go to Cookie Policy'}
  ];
  trackByItem(index, item) {
    return (item.id);
  }

  constructor() {}

}
