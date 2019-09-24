import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'nv-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent {

  openSidenav: boolean = false;

  constructor(
    private r: Renderer2
  ) {}

  sidenavOpen() {
    this.openSidenav = !this.openSidenav;

    if (this.openSidenav === true) {
      this.r.setStyle(document.querySelector('#mySidenav'), 'width', '100%');
    } else {
      this.r.setStyle(document.querySelector('#mySidenav'), 'width', '0');
    }
  }

}
