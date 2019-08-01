import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID, Self} from '@angular/core';
// utils
import {SeoService} from '../../shared/services/seo.service';
import {isPlatformBrowser} from '@angular/common';
// dialog
import {MatDialog} from '@angular/material/dialog';
import {DialogExampleComponent} from '../../shared/dialog/dialog-example/dialog-example.component';
// data
import {HomeService} from '../../shared/services/data/home.service';
import {NgOnDestroy} from '../../shared/services/data/ngOnDestroy.service';
import {takeUntil} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {HomeInterface} from '../../shared/models/home.interface';

@Component({
  selector: 'nv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgOnDestroy],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  isBrowser;
  dataHome$: HomeInterface[];
  dataUse = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private seoService: SeoService,
    private dialog: MatDialog,
    private homeService: HomeService,
    private cdr: ChangeDetectorRef,
    @Self() private ngOnDestroy$: NgOnDestroy
  ) {
    this.seoService.createCanonicalURL();
    this.seoService.setMeta('home');
    this.isBrowser = isPlatformBrowser(platformId);
  }

  openDialog() {
    this.dialog.open(DialogExampleComponent, {
      data: {
        animal: 'panda'
      }
    });
  }

  ngOnInit() {
  }

  trackByItem(index, item) {
    return (item.id);
  }

  getHomeInfo() {
    this.homeService.getHomeInfo()
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe(data => {
        this.dataHome$ = data;
        this.cdr.detectChanges();
        // console.log(this.dataHome$);
      }, (e: HttpErrorResponse) => console.log(e));
  }

  callApi() {
    this.dataUse = true;
    this.getHomeInfo();
  }

}
