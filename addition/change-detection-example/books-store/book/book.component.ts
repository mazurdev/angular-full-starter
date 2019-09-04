import {ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'nv-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements DoCheck, OnChanges {

  @Input() book;

  constructor() {
  }

  ngDoCheck() {
    console.log('Book Component is being checked!');
  }

  ngOnChanges() {

  }

}
