// core
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
// forms
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// detect devices
import {DeviceDetectorModule} from 'ngx-device-detector';
// SEO
import {NgxJsonLdModule} from '@ngx-lite/json-ld';
// material
import {MatDialogModule, MatSnackBarModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    // forms
    FormsModule,
    ReactiveFormsModule,
    // detect devices
    DeviceDetectorModule.forRoot(),
    // SEO
    NgxJsonLdModule,
    // material
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    // forms
    FormsModule,
    ReactiveFormsModule,
    // detect devices
    DeviceDetectorModule,
    // SEO
    NgxJsonLdModule,
    // material
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class SharedModule {}
