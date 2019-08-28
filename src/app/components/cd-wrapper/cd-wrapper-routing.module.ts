// core
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// app
import {CdWrapperComponent} from './cd-wrapper.component';
// books
import {BooksStoreComponent} from '../books-store/books-store.component';
import {BooksComponent} from '../books-store/books/books.component';
import {BookComponent} from '../books-store/book/book.component';
// articles
import {ArticlesStoreComponent} from '../article-store/articles-store.component';
import {ArticlesComponent} from '../article-store/articles/articles.component';
import {ArticleComponent} from '../article-store/article/article.component';

const routes: Routes = [
  {path: '', component: CdWrapperComponent, children:
    [
      {path: 'books-store', component: BooksStoreComponent, children:
        [
          {path: 'books', component: BooksComponent, children: [{path: 'book', component: BookComponent}]}
        ]
      },
      {path: 'articles-store', component: ArticlesStoreComponent, children:
        [
          {path: 'articles', component: ArticlesComponent, children: [{path: 'article', component: ArticleComponent}]}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdWrapperRoutingModule {
}
