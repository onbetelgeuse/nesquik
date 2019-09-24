import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../../shared/services/error.service';
import { NotificationService } from '../../shared/services/notification.service';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
  constructor(
    private readonly notifier: NotificationService,
    private readonly errorService: ErrorService,
  ) {}

  public handleError(error: Error | HttpErrorResponse): void {
    let message: string;

    if (this.isHttpErrorResponse(error)) {
      message = this.errorService.getServerErrorMessage(error);
    } else {
      message = this.errorService.getClientErrorMessage(error);
    }

    this.notifier.notifyError(message);
  }

  private isHttpErrorResponse(error: any): error is HttpErrorResponse {
    return error instanceof HttpErrorResponse;
  }
}

export const AppErrorHandlerProvider = {
  provide: ErrorHandler,
  useClass: AppErrorHandler,
};
