import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {DialogExampleData} from '../../interfaces';

@Component({
  selector: 'nv-dialog-example',
  templateUrl: 'dialog-example.component.html',
})
export class DialogExampleComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogExampleData
  ) {}
}
