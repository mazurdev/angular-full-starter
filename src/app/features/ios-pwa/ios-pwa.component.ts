// core
import {Component} from '@angular/core';
// utils
import {MatSnackBarRef} from '@angular/material';
import {ICONS} from '@shared/helpers/icons';
import {VARIABLES} from '@shared/helpers/variables';

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
