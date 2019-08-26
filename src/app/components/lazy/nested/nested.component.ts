import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'nv-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NestedComponent {

  @Input() data: string[];
  constructor() {}

}
