import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  message = this.socket.fromEvent<any>('message');

  constructor(private readonly socket: Socket) {}

  public NotifyPropertyChanged<T = any>(propertyName: string, value: T) {
    this.socket.emit('propertyChanged', { propertyName, value });
  }
}
