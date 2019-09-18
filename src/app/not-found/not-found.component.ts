// core
import {Component, OnInit} from '@angular/core';
// utils
import {NotFoundService} from '../shared/services/not-found.service';

@Component({
  selector: 'nv-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  public status: { code: number; message: string };

  constructor(
    private notFoundService: NotFoundService
  ) {
  }

  ngOnInit(): void {
    this.notFoundService.setStatus(404, 'Not Found');
  }

}
