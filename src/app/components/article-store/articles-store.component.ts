import {ChangeDetectionStrategy, Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'nv-articles-store',
  templateUrl: './articles-store.component.html',
  styleUrls: ['./articles-store.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesStoreComponent implements OnInit, DoCheck {

  articles = [
    {title: 'article name 1'},
    {title: 'article name 2'},
    {title: 'article name 3'}
  ];

  constructor() {

  }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log('Articles Store is being checked!');
  }

  onChangeArticleName() {
    this.articles[0].title = 'New name for first article';
    // this.articles[0] = { title: 'New name for first article' };
  }

}
