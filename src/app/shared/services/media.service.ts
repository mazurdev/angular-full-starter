import {Injectable} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

@Injectable()
export class MediaService {

  isMobile;
  is1280;

  constructor(
    public breakpointObserver: BreakpointObserver
  ) {
    // is1280
    this.breakpointObserver
      .observe(['(min-width: 1280px)'])
      .subscribe((state: BreakpointState) => {
        this.is1280 = !state.matches;
      });
    // is475
    this.breakpointObserver
      .observe(['(min-width: 475px)'])
      .subscribe((state: BreakpointState) => {
        this.isMobile = !state.matches;
      });
  }

}
