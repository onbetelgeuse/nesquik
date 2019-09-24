import { environment } from '../../../../environments/environment';

export interface ToastOptions {
  delay?: number;
  autohide?: boolean;
  header?: string;
  classname?: string;
}

export const TOAST_OPTIONS_DEFAULT: ToastOptions = environment.toast;
