import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ListComponent } from './components/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './components/details/details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { CommuneService } from '../shared/services/commune.service';

@NgModule({
  declarations: [ListComponent, DetailsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule,
  ],
  providers: [CommuneService],
  entryComponents: [DetailsComponent],
})
export class DashboardModule {}
