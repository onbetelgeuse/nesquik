import { Injectable } from '@angular/core';
import { ToastService } from 'src/app/toast/service/toast.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private readonly toastService: ToastService) {}

  public notifyInfo(message: string, title: string = null): void {}
  public notifySuccess(message: string): void {}
  public notifyWarning(message: string): void {}
  public notifyError(message: string): void {
    this.toastService.show(message, { classname: 'bg-danger text-light' });
  }
}
