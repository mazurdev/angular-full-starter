import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ErrorService {

  getClientErrorMessage(error: Error): string {
    return error.message ?
      error.message :
      error.toString();
  }

  getServerErrorMessage(error: HttpErrorResponse): string {
    return navigator.onLine ?
      error.message :
      'No Internet Connection';
  }

  getServerErrors(error: HttpErrorResponse): string {
    return navigator.onLine ?
      error.error :
      'No Internet Connection';
  }

}
