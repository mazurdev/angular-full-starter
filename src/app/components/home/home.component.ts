import {Component, OnInit} from '@angular/core';
// dialog
import {MatDialog} from '@angular/material/dialog';
import {DialogExampleComponent} from '../../shared/dialog/dialog-example/dialog-example.component';

@Component({
  selector: 'nv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) {
  }

  openDialog() {
    this.dialog.open(DialogExampleComponent, {
      data: {
        animal: 'panda'
      }
    });
  }

  ngOnInit() {
  }

}
