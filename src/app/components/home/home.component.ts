import {ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
// SEO
import {SeoService} from '../../shared/services/seo.service';
// dialog
import {MatDialog} from '@angular/material/dialog';
import {DialogExampleComponent} from '../../shared/dialog/dialog-example/dialog-example.component';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'nv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  isBrowser;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private seoService: SeoService,
    public dialog: MatDialog
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

}
