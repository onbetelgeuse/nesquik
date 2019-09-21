import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { EventsService } from 'src/app/shared/services/events.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(
    private eventsService: EventsService,
    private dashboardService: DashboardService,
  ) {}

  ngOnInit() {
    this.dashboardService.getMe().subscribe(res => console.log(res));
    this.eventsService.NotifyPropertyChanged('temperature', 14.23);
  }
}
