import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private intervalId: any;
  public title = 'nesquik';
  public now: number;

  public ngOnInit() {
    this.intervalId = setInterval(() => (this.now = Date.now()), 1);
  }

  public ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
