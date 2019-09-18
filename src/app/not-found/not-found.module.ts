// core
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// app
import {NotFoundRoutingModule} from './not-found-routing.module';
import {NotFoundComponent} from './not-found.component';
// utils
import {NotFoundService} from '../shared/services/not-found.service';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    // core
    CommonModule,
    RouterModule,
    NotFoundRoutingModule,
  ],
  providers: [
    NotFoundService
  ]
})
export class NotFoundModule {
}
