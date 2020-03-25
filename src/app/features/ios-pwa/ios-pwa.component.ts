// core
import {Component} from '@angular/core';
// utils
import {ICONS} from '@shared/helpers/icons';
import {VARIABLES} from '@shared/helpers/variables';
import {MatSnackBarRef} from '@angular/material/snack-bar';

@Component({
  selector: 'fs-ios-pwa',
  templateUrl: './ios-pwa.component.html',
  styleUrls: ['./ios-pwa.component.scss']
})
export class IosPWAComponent {

  APP_LABEL = VARIABLES.APP_LABEL;
  iconArrowDown = ICONS.iconArrowDown;
  iconTimes = ICONS.iconTimes;

  constructor(
    private snackBarRef: MatSnackBarRef<IosPWAComponent>
  ) {
  }

  close() {
    this.snackBarRef.dismiss();
  }

}
