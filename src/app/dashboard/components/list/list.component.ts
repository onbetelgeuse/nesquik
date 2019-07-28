import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { OpenWeatherMapApiService } from 'src/app/openweathermap/services/openweathermapapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private apiWeather: OpenWeatherMapApiService,
    private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getValues().subscribe(res => console.log(res));
    this.apiWeather.find('lyon').subscribe(res=>console.log(res));
  }

}
