import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    getEventSource(url: string): EventSource {
        return new EventSource(url);
    }
}
