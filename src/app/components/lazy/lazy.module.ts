// core
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
// app
import {LazyRoutingModule} from './lazy-routing.module';
import {LazyComponent} from './lazy.component';
import {NestedComponent} from './nested/nested.component';

@NgModule({
  declarations: [
    LazyComponent,
    NestedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LazyRoutingModule
  ]
})
export class LazyModule {
}
