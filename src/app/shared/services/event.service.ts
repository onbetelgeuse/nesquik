import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private socket: Socket) {}

  public messageEvents: Observable<string[]> = this.socket.fromEvent<string[]>(
    '##message-events',
  );
}
