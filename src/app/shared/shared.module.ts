import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskPipe } from './pipes/mask.pipe';
import { SiretPipe } from './pipes/siret.pipe';
import { PhoneDirective } from './directives/phone.directive';

@NgModule({
  declarations: [MaskPipe, SiretPipe, PhoneDirective],
  imports: [CommonModule],
  exports: [MaskPipe, PhoneDirective],
})
export class SharedModule {}
