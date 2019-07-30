// core
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
// utils
import {RouterModule} from '@angular/router';
// utils
import {DirectivesModule} from '../shared/directives/directives.module';
// app
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
// features
import {BurgerComponent} from '../features/burger/burger.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // utils
    DirectivesModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    // features
    BurgerComponent
  ],
})
export class LayoutsModule {}
