// core
import {Component} from '@angular/core';
// utils


@Component({
  selector: 'nv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  nav = [
    {url: '/lazy/articles', name: 'Home', label: 'Go to Home', exact: true},
    {url: '/lazy/articles', name: 'About Us', label: 'Go to About', exact: false},
    {url: '/lazy/articles', name: 'Contact Us', label: 'Go to Contact Us', exact: false}
  ];
  trackByItem(index, item) {
    return (item.id);
  }

  constructor(
  ) {
  }

}
