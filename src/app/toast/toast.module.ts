import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastsComponent } from './component/toasts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from './service/toast.service';

@NgModule({
  declarations: [ToastsComponent],
  imports: [CommonModule, NgbModule],
  exports: [ToastsComponent, ToastService],
})
export class ToastModule {}
