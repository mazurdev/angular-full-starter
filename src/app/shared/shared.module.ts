// core
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
// utils
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DeviceDetectorModule} from 'ngx-device-detector';
import {NgxJsonLdModule} from '@ngx-lite/json-ld';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
// pipes
import {UniqueFilterPipe} from '@shared/pipes/unique-filter.pipe';
// pipes
import {SafePipe} from '@shared/pipes/safe.pipe';
import {OrderByPipe} from '@shared/pipes/order-by.pipe';
import {FilterByPipe} from '@shared/pipes/filter-by.pipe';
// material
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    // pipes
    SafePipe,
    OrderByPipe,
    FilterByPipe,
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
    SafePipe,
    OrderByPipe,
    FilterByPipe,
    UniqueFilterPipe,
    // material
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule {}
