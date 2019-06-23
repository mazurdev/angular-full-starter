import {Component, OnInit} from '@angular/core';
import {MatSnackBarRef} from '@angular/material';

@Component({
  selector: 'nv-ios-pwa',
  templateUrl: './ios-pwa.component.html',
  styleUrls: ['./ios-pwa.component.scss']
})
export class IosPWAComponent implements OnInit {

  constructor(
    private snackBarRef: MatSnackBarRef<IosPWAComponent>
  ) {
  }

  close() {
    this.snackBarRef.dismiss();
  }

  ngOnInit() {
  }

}
