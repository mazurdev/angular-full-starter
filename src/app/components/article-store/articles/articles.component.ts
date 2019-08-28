import {Component, DoCheck, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'nv-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements DoCheck, OnChanges {

  @Input() articles;

  constructor() {
  }

  ngDoCheck() {
    console.log('Articles Component is being checked!');
  }

  ngOnChanges() {

  }

}
