// core
import {Component, Inject} from '@angular/core';
// utils
import {MAT_DIALOG_DATA} from '@angular/material';
import {DialogExampleData} from '@models/home.interface';

@Component({
  selector: 'fs-dialog-example',
  templateUrl: 'dialog-example.component.html',
})
export class DialogExampleComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogExampleData
  ) {}
}
