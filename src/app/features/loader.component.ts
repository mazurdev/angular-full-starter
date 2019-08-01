import {Component} from '@angular/core';
import {LoaderService} from '../shared/services/data/loader.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'nv-loader',
  template: `
    <div *ngIf="isLoading | async" class="overlay">
      <mat-progress-spinner class="spinner" [color]="color" [mode]="mode" [value]="value"></mat-progress-spinner>
    </div>
  `,
  styles: [`
    .overlay {
      position: fixed;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(74, 74, 74, .8);
      z-index: 99999;
    }

    .spinner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `]
})
export class LoaderComponent {

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(
    private loaderService: LoaderService
  ) {
  }
}
