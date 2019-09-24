import { AppErrorHandler } from './app-error.handler';
import { ErrorService } from 'src/app/shared/services/error.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { mock, instance } from 'ts-mockito';

describe('AppError', () => {
  let errorHandler: AppErrorHandler;
  let errorService: ErrorService;
  let notifier: NotificationService;
  beforeEach(() => {
    errorService = mock(ErrorService);
    notifier = mock(NotificationService);

    errorHandler = new AppErrorHandler(
      instance(notifier),
      instance(errorService),
    );
  });
  it('should create an instance', () => {
    expect(errorHandler).toBeTruthy();
  });
});
