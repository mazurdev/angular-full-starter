// core
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
// forms
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// SEO
import {NgxJsonLdModule} from '@ngx-lite/json-ld';
// detect devices
import {DeviceDetectorModule} from 'ngx-device-detector';
// material
import {MatDialogModule, MatSnackBarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    // forms
    FormsModule,
    ReactiveFormsModule,
    // SEO
    NgxJsonLdModule,
    // detect devices
    DeviceDetectorModule.forRoot(),
    // material
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    // forms
    FormsModule,
    ReactiveFormsModule,
    // SEO
    NgxJsonLdModule,
    // detect devices
    DeviceDetectorModule,
    // material
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class SharedModule {}
