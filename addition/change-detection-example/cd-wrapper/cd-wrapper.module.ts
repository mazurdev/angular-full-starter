// core
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
// app
import {CdWrapperRoutingModule} from './cd-wrapper-routing.module';
import {CdWrapperComponent} from './cd-wrapper.component';
// books
import {BooksStoreComponent} from '../books-store/books-store.component';
import {BooksComponent} from '../books-store/books/books.component';
import {BookComponent} from '../books-store/book/book.component';
// articles
import {ArticlesStoreComponent} from '../article-store/articles-store.component';
import {ArticlesComponent} from '../article-store/articles/articles.component';
import {ArticleComponent} from '../article-store/article/article.component';

@NgModule({
  declarations: [
    CdWrapperComponent,
    // books
    BooksStoreComponent,
    BooksComponent,
    BookComponent,
    // articles
    ArticlesStoreComponent,
    ArticlesComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CdWrapperRoutingModule
  ],
  providers: []
})
export class CdWrapperModule {
}
