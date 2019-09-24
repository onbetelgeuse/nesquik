import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  public getServerErrorMessage(error: HttpErrorResponse): string {
    if (!navigator.onLine) {
      return 'No Internet Connection';
    }
    switch (error.status) {
      case 0:
        return 'Service is unavailable, please retry again later.';
      default:
        return error.message;
    }
  }

  public getClientErrorMessage(error: Error): string {
    return error.message ? error.message : error.toString();
  }
}
