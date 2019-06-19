// core
import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
// utils
import {ErrorService} from '../services/error-handle/error.service';
import {NotificationService} from '../services/error-handle/notification.service';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {

  // Error handling is important and needs to be loaded first.
  // Because of this we should manually inject the services with Injector.
  constructor(
    private injector: Injector
  ) {
  }

  handleError(error: Error | HttpErrorResponse) {

    const errorService = this.injector.get(ErrorService);
    const notifier = this.injector.get(NotificationService);

    let message;
    // let stackTrace;
    if (error instanceof HttpErrorResponse) {
      // Server error
      message = errorService.getServerErrorMessage(error);
      notifier.showError(message);
    } else {
      // Client Error
      message = errorService.getClientErrorMessage(error);
      notifier.showError(message);
    }
    // Always log errors
    console.error(error);
  }
}
