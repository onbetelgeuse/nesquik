import { NotificationService } from './notification.service';
import { ToastService } from 'src/app/modules/toast/service/toast.service';
import { mock, instance } from 'ts-mockito';

describe('NotificationService', () => {
  let service: NotificationService;
  let toastService: ToastService;
  beforeEach(() => {
    toastService = mock(ToastService);

    service = new NotificationService(instance(toastService));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
