import { Component, TemplateRef } from '@angular/core';
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  // tslint:disable-next-line: no-host-metadata-property
  host: { '[class.ngb-toasts]': 'true' },
})
export class ToastsComponent {
  constructor(public readonly toastService: ToastService) {}

  public isTemplate(toast: any): toast is TemplateRef<any> {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
