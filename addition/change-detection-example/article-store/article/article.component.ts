import {ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'nv-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements DoCheck, OnChanges {

  @Input() article;

  constructor() {
  }

  ngDoCheck() {
    console.log('Article Component is being checked!');
  }

  ngOnChanges() {

  }

}
