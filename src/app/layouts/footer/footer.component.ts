import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'nv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear: number = new Date().getFullYear();

  linksPrivacy = [
    {url: '/lazy/nested', name: 'Terms Of Use', label: 'Go to Terms Of Use'},
    {url: '/lazy/nested', name: 'Privacy Policy', label: 'Go to Privacy Policy'},
    {url: '/lazy/nested', name: 'Cookie Policy', label: 'Go to Cookie Policy'}
  ];
  trackByItem(index, item) {
    return (item.id);
  }

  constructor() {}

  ngOnInit() {}

}
