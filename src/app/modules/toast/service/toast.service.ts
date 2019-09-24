import { Injectable, TemplateRef } from '@angular/core';
import {
  ToastOptions,
  TOAST_OPTIONS_DEFAULT,
} from '../interface/toast.interface';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: any[] = [];

  public show(
    textOrTpl: string | TemplateRef<any>,
    options: ToastOptions = {},
  ) {
    options = Object.assign({}, TOAST_OPTIONS_DEFAULT, options);
    this.toasts.push({ textOrTpl, ...options });
  }

  public remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
