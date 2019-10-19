import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    notification = this.socket.fromEvent<string[]>('notification');
    marker = this.socket.fromEvent<number[]>('marker');

    constructor(private socket: Socket) {
    }


    sendNotice(msg: string) {
        this.socket.emit('notice', msg);
    }

}
