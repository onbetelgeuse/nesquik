import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private intervalId: any;
  public now: number;
  constructor() {}

  public ngOnInit() {
    this.intervalId = setInterval(() => (this.now = Date.now()), 500);
  }

  public ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
