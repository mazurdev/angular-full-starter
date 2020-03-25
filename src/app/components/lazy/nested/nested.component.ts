// core
import {Component} from '@angular/core';
// utils
import {SeoService} from '@shared/services/seo.service';

@Component({
  selector: 'fs-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.scss']
})
export class NestedComponent {

  constructor(
    private seoService: SeoService,
  ) {
    this.seoService.setMeta('lazy-nested');
  }

}
