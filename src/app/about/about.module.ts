import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { ListComponent } from './components/list/list.component';
import { ContractComponent } from './components/contract/contract.component';


@NgModule({
  declarations: [ListComponent, ContractComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
