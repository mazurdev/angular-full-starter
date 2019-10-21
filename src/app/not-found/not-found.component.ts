// core
import {Component, OnInit} from '@angular/core';
// utils
import {NotFoundService} from '@shared/services/not-found.service';
import {VARIABLES} from '@shared/helpers/variables';

@Component({
  selector: 'nv-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  HOME = VARIABLES.HOME;
  public status: { code: number; message: string };

  constructor(
    private notFoundService: NotFoundService
  ) {
  }

  ngOnInit(): void {
    this.notFoundService.setStatus(404, 'Not Found');
  }

}
