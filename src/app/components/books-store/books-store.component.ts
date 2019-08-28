import {ChangeDetectionStrategy, Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'nv-books-store',
  templateUrl: './books-store.component.html',
  styleUrls: ['./books-store.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksStoreComponent implements OnInit, DoCheck {

  books = [
    {title: 'book name 1'},
    {title: 'book name 2'},
    {title: 'book name 3'}
  ];

  constructor() {

  }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log('Books Store is being checked!');
  }

  onChangeBookName() {
    this.books[0].title = 'New name for first book';
    // this.books[0] = { title: 'New name for first book' };
  }

}
