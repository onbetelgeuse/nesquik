import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsService } from './services/events.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [EventsService],
  exports: [],
})
export class SharedModule {}
