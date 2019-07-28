// core
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
// forms
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
    // detect devices
    DeviceDetectorModule,
    // material
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class SharedModule {}
