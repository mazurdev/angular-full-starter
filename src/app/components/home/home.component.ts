import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, PLATFORM_ID, Self} from '@angular/core';
// utils
import {SeoService} from '@shared/services/seo.service';
import {isPlatformBrowser} from '@angular/common';
import {showing} from '@shared/utils/animations';
import {MatDialog} from '@angular/material/dialog';
import {DialogExampleComponent} from '@features/dialog/dialog-example/dialog-example.component';
// data
import {DataService} from '@shared/services/data/data.service';
import {NgOnDestroy} from '@shared/services/data/ngOnDestroy.service';
import {takeUntil} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {HomeInterface} from '@shared/models/home.interface';

@Component({
  selector: 'nv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgOnDestroy],
  animations: [showing],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  data: string[];

  isBrowser;
  dataHome$: HomeInterface[];
  dataUse = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    @Self() private ngOnDestroy$: NgOnDestroy,
    private seoService: SeoService,
    private dialog: MatDialog,
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {
    this.seoService.createCanonicalURL();
    this.seoService.setMeta('home');
    this.isBrowser = isPlatformBrowser(platformId);
  }

  openDialog() {
    this.dialog.open(DialogExampleComponent, {
      maxWidth: '90vw',
      height: 'max-content',
      width: '100%',
      hasBackdrop: true,
      backdropClass: 'custom-modal-backdrop',
      panelClass: 'custom-modal-modal-panel',
      autoFocus: true,
      ariaLabel: 'Custom Modal',
      data: {
        animal: 'panda'
      }
    });
  }

  getHomeInfo() {
    this.dataService.getHomeInfo()
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe(data => {
        this.dataHome$ = data;
        this.cdr.detectChanges();
        console.log(this.dataHome$);
      }, (e: HttpErrorResponse) => console.log(e));
  }

  callApi() {
    this.dataUse = true;
    this.getHomeInfo();
  }

  trackByItem(index, item) {
    return (item.id);
  }

}
