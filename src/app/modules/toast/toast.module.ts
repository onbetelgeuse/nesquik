import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastsComponent } from './component/toasts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ToastsComponent],
  imports: [CommonModule, NgbModule],
  exports: [ToastsComponent],
})
export class ToastModule {}
