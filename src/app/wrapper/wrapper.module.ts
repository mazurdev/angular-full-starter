// core
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
// utils
import {RouterModule} from '@angular/router';
// app
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
// utils
import {DirectivesModule} from '../shared/directives/directives.module';

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
    FooterComponent
  ],
})
export class WrapperModule {}
