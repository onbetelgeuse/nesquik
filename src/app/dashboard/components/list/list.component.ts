import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { EventsService } from '../../../shared/services/events.service';
import { ToastService } from '../../../toast/service/toast.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(
    private readonly eventsService: EventsService,
    private readonly dashboardService: DashboardService,
  ) {}

  ngOnInit() {
    this.dashboardService.getMe().subscribe();
    this.eventsService.NotifyPropertyChanged('temperature', 14.23);
  }
}
