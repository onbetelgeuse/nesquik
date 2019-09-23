import { ErrorHandler, Injector, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorsService } from './shared/services/errors.service';
import { NotificationService } from './shared/services/notification.service';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
  constructor(
    private readonly notifier: NotificationService,
    private readonly errorsService: ErrorsService,
  ) {}

  public handleError(error: Error | HttpErrorResponse): void {
    let message: string;

    if (this.isHttpErrorResponse(error)) {
      message = this.errorsService.getServerErrorMessage(error);
    } else {
      message = this.errorsService.getClientErrorMessage(error);
    }

    this.notifier.notifyError(message);
  }

  private isHttpErrorResponse(error: any): error is HttpErrorResponse {
    return error instanceof HttpErrorResponse;
  }
}
