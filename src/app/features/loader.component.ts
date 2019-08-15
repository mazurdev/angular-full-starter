// core
import {Component} from '@angular/core';
// utils
import {LoaderService} from '../shared/services/data/loader.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'nv-loader',
  template: `
    <div *ngIf="isLoading | async" class="overlay">
      <mat-progress-spinner class="spinner" [color]="color" [mode]="mode" [value]="value" aria-label="Progress"></mat-progress-spinner>
    </div>
  `,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  color = '#1976d2';
  mode = 'indeterminate';
  value = 50;
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(
    private loaderService: LoaderService
  ) {
  }

}
