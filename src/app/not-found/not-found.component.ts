// core
import {Component, OnInit} from '@angular/core';
// utils
import {NotFoundService} from '@shared/services/not-found.service';
import {ROUTES} from '@shared/helpers/routes';

@Component({
  selector: 'fs-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  HOME = ROUTES.HOME;
  public status: { code: number; message: string };

  constructor(
    private notFoundService: NotFoundService
  ) {
  }

  ngOnInit(): void {
    this.notFoundService.setStatus(404, 'Not Found');
  }

}
