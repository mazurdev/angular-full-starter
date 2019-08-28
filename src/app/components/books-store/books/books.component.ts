import {Component, DoCheck, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'nv-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements DoCheck, OnChanges {

  @Input() books;

  constructor() {
  }

  ngDoCheck() {
    console.log('Books Component is being checked!');
  }

  ngOnChanges() {

  }

}
