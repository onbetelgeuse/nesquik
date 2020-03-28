import { NgModule, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { ListComponent } from './components/list/list.component';
import { ContractComponent } from './components/contract/contract.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [ListComponent, ContractComponent],
  imports: [CommonModule, AboutRoutingModule, NgSelectModule],
})
@HostBinding('div.nb')
export class AboutModule {}
