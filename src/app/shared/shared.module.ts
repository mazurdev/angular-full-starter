// core
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
// forms
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxJsonLdModule} from '@ngx-lite/json-ld';

@NgModule({
  imports: [
    CommonModule,
    // forms
    FormsModule,
    ReactiveFormsModule,
    // SEO
    NgxJsonLdModule
  ],
  exports: [
    // forms
    FormsModule,
    ReactiveFormsModule,
    // SEO
    NgxJsonLdModule
  ],
  declarations: []
})
export class SharedModule {}
