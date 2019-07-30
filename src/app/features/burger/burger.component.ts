import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'nv-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent {

  isBrowser;
  openSidenav: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  sidenavOpen() {
    this.openSidenav = !this.openSidenav;
    // isBroser
    if (this.isBrowser) {
      if (this.openSidenav === true) {
        $('#mySidenav').css('width', '100%');
      } else {
        $('#mySidenav').css('width', '0');
      }
    }
  }

}
