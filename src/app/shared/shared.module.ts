// core
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
// utils
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DeviceDetectorModule} from 'ngx-device-detector';
import {NgxJsonLdModule} from '@ngx-lite/json-ld';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
// pipes
import {ValuesPipe} from '@shared/pipes/values.pipe';
import {UniqueFilterPipe} from '@shared/pipes/unique-filter.pipe';
// material
import {MatDialogModule, MatProgressSpinnerModule, MatSnackBarModule} from '@angular/material';

@NgModule({
  declarations: [
    // pipes
    ValuesPipe,
    UniqueFilterPipe
  ],
  imports: [
    CommonModule,
    // utils
    FormsModule,
    ReactiveFormsModule,
    DeviceDetectorModule.forRoot(),
    NgxJsonLdModule,
    FontAwesomeModule,
    // material
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    // utils
    FormsModule,
    ReactiveFormsModule,
    DeviceDetectorModule,
    NgxJsonLdModule,
    FontAwesomeModule,
    // pipes
    ValuesPipe,
    UniqueFilterPipe,
    // material
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule {}
