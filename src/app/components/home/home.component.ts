import {Component, OnInit} from '@angular/core';
// SEO
import {SeoService} from '../../shared/services/seo.service';
// dialog
import {MatDialog} from '@angular/material/dialog';
import {DialogExampleComponent} from '../../shared/dialog/dialog-example/dialog-example.component';

@Component({
  selector: 'nv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private seoService: SeoService,
    public dialog: MatDialog
  ) {
    this.seoService.createCanonicalURL();
    this.seoService.setMeta('home');
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
