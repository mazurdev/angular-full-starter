import {Component} from '@angular/core';

@Component({
  selector: 'nv-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent {

  openSidenav: boolean = false;

  constructor() {}

  sidenavOpen() {
    this.openSidenav = !this.openSidenav;
    const mySidenav = document.getElementById('mySidenav') as HTMLElement;

    if (this.openSidenav === true) {
      mySidenav.style.width = '100%';
    } else {
      mySidenav.style.width = '0';
    }
  }

}
