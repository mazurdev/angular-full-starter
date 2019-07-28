import {Component, OnInit} from '@angular/core';
import {slideInAnimation} from '../../shared/utils/route-animation';

@Component({
  selector: 'nv-lazy',
  template: `
    <div [@routeAnimations]="o && o.activatedRouteData && o.activatedRouteData['animation']">
      <router-outlet #o="outlet"></router-outlet>
    </div>
  `,
  styleUrls: ['./lazy.component.scss'],
  animations: [slideInAnimation]
})
export class LazyComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
