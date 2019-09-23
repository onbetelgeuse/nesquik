import { AppErrorHandler } from './app.errorhandler';
import { NotificationService } from './shared/services/notification.service';
import { ErrorsService } from './shared/services/errors.service';
import { mock, instance, when, verify, anything } from 'ts-mockito';
import { Injector } from '@angular/core';

describe('App.Errorhandler', () => {
  let errorHandler: AppErrorHandler;
  let notifier: NotificationService;
  let errorsService: ErrorsService;
  const injector: Injector = mock(Injector);

  beforeEach(() => {
    notifier = mock(NotificationService);
    errorsService = mock(ErrorsService);
    errorHandler = new AppErrorHandler(
      instance(notifier),
      instance(errorsService),
    );
  });

  it('should create an instance', () => {
    expect(errorHandler).toBeTruthy();
  });
});
