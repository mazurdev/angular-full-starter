import {Component, OnInit} from '@angular/core';
import {fadeAnimation} from '../../shared/utils/route-animation';

@Component({
  selector: 'nv-lazy',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./lazy.component.scss'],
  animations: [fadeAnimation]
})
export class LazyComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
