import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { ContractComponent } from './components/contract/contract.component';

@NgModule({
  declarations: [ContractComponent],
  imports: [CommonModule, AboutRoutingModule]
})
export class AboutModule {}
