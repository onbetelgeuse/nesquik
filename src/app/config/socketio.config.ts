import { SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
export const socketIoConfig: SocketIoConfig = {
  url: environment.socket.url,
  options: { autoConnect: true },
};
